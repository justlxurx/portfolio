import s from "./Wallet.module.scss";
import { Input } from "../Input/Input";
// import { Logo } from "../../../../assets/icons/logo";
import React, { useEffect, useState } from "react";
import CountdownTimer from "../../../../features/countdown/Countdown";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { cn } from "../../../../utils/classNameCombiner.ts";
import { testSaleSmart } from "../../../../web3/smart-contracts/test/TestSale.ts";
import { testUSDTSmart } from "../../../../web3/smart-contracts/test/TestUSDT.ts";
import { testETHSmart } from "../../../../web3/smart-contracts/test/TestETH.ts";
import eth from "../../../../assets/images/eth.svg";
import circle from "../../../../assets/images/circle.svg";
import usdt from "../../../../assets/images/usdt.svg";

const targetDate = new Date("2024-05-18T00:00:00");

export const Wallet = () => {
  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [buyOption, setBuyOption] = useState<"ETH" | "USDT">("ETH");
  const [isInited, setIsInited] = useState(false);
  const [usdtPrice, setUsdtPrice] = useState<number | null>(null);
  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [balance, setBalance] = useState("0");
  // const [buyValue, setBuyValue] = useState("");
  const [calcValue, setCalcValue] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isConnected) {
      switch (chainId) {
        case 97: {
          Promise.all([
            testSaleSmart.init(walletProvider!, address!),
            testUSDTSmart.init(walletProvider!, address!),
            testETHSmart.init(walletProvider!, address!),
          ])
            .then(() => {
              setIsInited(true);
            })
            .catch(() => {
              setIsInited(false);
            });

          break;
        }
      }
    }
  }, [address, chainId, isConnected]);

  useEffect(() => {
    if (!isConnected) setIsInited(false);
  }, [isConnected]);

  useEffect(() => {
    if (isInited) {
      testSaleSmart.tokenPriceETH().then((res) => setEthPrice(Number(res)));
      testSaleSmart.tokenPriceUSDT().then((res) => setUsdtPrice(Number(res)));

      testSaleSmart.usersTokens().then((res) => setBalance(res));
    }
  }, [isInited]);

  const onClickConnect = () => {
    if (isConnected) open({ view: "Account" });
    else open({ view: "Connect" });
  };

  const getTokenPrice = () => {
    if (buyOption === "ETH") return `${ethPrice} ETH`;

    return `${usdtPrice} USDT`;
  };

  const onChangePayInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    try {
      const valueAsNumber = Number(value);

      if (buyOption === "ETH") {
        setCalcValue(valueAsNumber / ethPrice!);
      } else {
        setCalcValue(valueAsNumber / usdtPrice!);
      }
    } catch (err) {
      console.error(err);
    }
    // finally {
    //   setBuyValue(value);
    // }
  };

  // const onClickBuy = async () => {
  //   setIsLoading((prevState) => !prevState);

  //   if (buyOption === "ETH") {
  //     switch (chainId) {
  //       case 97: {
  //         await testETHSmart.approve(`${buyValue}`);
  //         await testSaleSmart.buyTokensByEth(`${buyValue}`);

  //         break;
  //       }
  //     }
  //   } else {
  //     switch (chainId) {
  //       case 97: {
  //         await testUSDTSmart.approve(`${buyValue}`);
  //         await testSaleSmart.buyTokensByUsdt(`${buyValue}`);

  //         break;
  //       }
  //     }
  //   }

  //   testSaleSmart
  //     .usersTokens()
  //     .then((res) => setBalance(res))
  //     .catch(console.error);

  //   setIsLoading(false);
  // };

  return (
    <section className={s.wallet} id="wallet">
      <p className={s.wallet__title}>Next Price Increase In</p>
      <CountdownTimer targetDate={targetDate} />
      <p className={s.raisedValue}>USD RAISED: $810,274.41 / $1,123,057</p>
      <div className={s.priceInc}>
        <input type="radio" id="priceInc" />
        <label htmlFor="#priceInc">Until Price Increase</label>
      </div>
      <div className={s.wallet__textWrapper}>
        <p className={s.wallet__text}>
          YOUR PURCHASED <span>$DOGYAI</span> = {balance}
        </p>
        <p className={s.wallet__text}>
          YOUR STAKEABLE <span>$DOGYAI</span> = 0
        </p>
      </div>
      <div className={s.coinst}>
        <span>1 $DOGYAI = {getTokenPrice()}</span>
        <div className={s.coinst__buttons}>
          <button
            className={cn(
              s.coinst__button,
              `${buyOption === "ETH" ? s.active : ""}`
            )}
            onClick={() => setBuyOption("ETH")}
          >
            <img src={eth} alt="eth" />
            ETH
          </button>
          <button
            className={cn(
              s.coinst__button,
              `${buyOption === "USDT" ? s.active : ""}`
            )}
            onClick={() => setBuyOption("USDT")}
          >
            <img src={usdt} alt="usdt" />
            USDT
          </button>
        </div>
      </div>
      <div className={s.inputs}>
        <div className={s.inputWrapper}>
          <div className={s.inputTopText}>
            <p>{buyOption} you pay</p>
            <span>max</span>
          </div>
          <Input
            type="number"
            placeholder={`Enter ${buyOption} amount`}
            onChange={onChangePayInput}
          >
            {buyOption === "ETH" ? (
              <img src={eth} alt="eth" className={s.inputImg} />
            ) : (
              <img src={usdt} alt="usdt" className={s.inputImg} />
            )}
          </Input>
        </div>
        <div className={s.inputWrapper}>
          <div className={s.inputTopText}>
            <p>$DOGYAI you receive</p>
          </div>
          <Input disabled={true} value={calcValue}>
            <img src={circle} alt="circle" className={s.inputImg} />
          </Input>
        </div>
      </div>
      <button onClick={onClickConnect} className={s.connectButton}>
        {isConnected ? "Your wallet" : "Connect wallet"}
      </button>
    </section>
  );
};
