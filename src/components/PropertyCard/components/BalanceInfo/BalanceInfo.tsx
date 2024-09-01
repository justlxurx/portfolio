import s from "./BalanceInfo.module.scss";
import { useSmarts } from "../../../../hooks/useSmart.ts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useState, useEffect } from "react";
import { formatEther, formatUnits, isError } from "ethers";

export const BalanceInfo = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const { smarts } = useSmarts();
  const { walletProvider } = useWeb3ModalProvider();
  const [payableBalance, setPayableBalance] = useState<string>("0");
  // const [buyOption, setBuyOption] = useState<"ETH" | "USDT">("ETH");

  // useEffect(() => {
  //   if (isConnected) {
  //     // if (buyOption === "ETH") {
  //     walletProvider!
  //       .request({
  //         method: "eth_getBalance",
  //         params: [address, "latest"],
  //       })
  //       .then((res) => setPayableBalance(formatEther(res)))
  //       .catch(console.error);
  //     // } else {
  //     //   // smarts?.usdt.balanceOf(address!).then((res) => setPayableBalance(res));
  //     // }
  //   }
  // }, [
  //   isConnected,
  //   buyOption,
  //   walletProvider,
  //   address,
  //   // smarts,=
  // ]);

  useEffect(() => {
    if (isConnected) {
      smarts?.usdt.balanceOf(address!).then((res) => setPayableBalance(res));
    }
  }, [isConnected, walletProvider, address, smarts]);
  return (
    <div className={s.main}>
      <div className={s.info}>
        <p className={s.info__left}>
          {/* 120,000 */}
          {payableBalance}
          <br /> USDT
        </p>
        <p className={s.info__right}>
          Estimated Rental <br /> Return: <span>20%</span>
          <br />
          <hr />
          Estimated Capital <br /> Appreciation: <span>10%</span>
        </p>
      </div>
      <div className={s.balance__wrap}>
        <p className={s.balance}>
          Token price: <span>100 USDT</span>
        </p>
        <p className={s.balance}>
          Balance: <span>{payableBalance} USDT</span>
        </p>
      </div>
    </div>
  );
};
