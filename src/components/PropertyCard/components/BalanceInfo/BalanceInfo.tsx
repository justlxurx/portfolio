import s from "./BalanceInfo.module.scss";
import { useSmarts } from "../../../../hooks/useSmart.ts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { managePropertyApi } from "../../../../api/property/manageProperty.ts";

export const BalanceInfo = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const { smarts } = useSmarts();
  const { walletProvider } = useWeb3ModalProvider();

  const [payableBalance, setPayableBalance] = useState<string>("0");
  const location = useLocation().pathname;
  const parts = location.split("/");
  const id = Number(parts.pop() || "");

  const [soldTokens, setSoldTokens] = useState(0);

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await managePropertyApi.get(id);
        setData(res);
        const n =
          ((res.total_tokens - res.tokens_available) * 100) / res.total_tokens;
        setSoldTokens(n);
        console.log("sold: " + soldTokens);
        console.log("Getting data " + res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  // useEffect(() => {
  //   if (isConnected) {
  //     async () => {
  //       try {
  //         const a = smarts?.realEstate.mint(
  //           address,
  //           "1000000000000000000000000000000000000"
  //         );
  //         console.log("a:");
  //         console.log(a);
  //       } catch (err) {
  //         console.log("error when try to mint");
  //         console.log(err);
  //       }
  //     };
  //     smarts?.realEstate
  //       .balanceOf(address!)
  //       .then((res) => setPayableBalance(res));
  //     console.log("address" + address);
  //   }
  // }, [isConnected, walletProvider, address, smarts]);

  useEffect(() => {
    const mintTokens = async () => {
      if (isConnected) {
        try {
          // Минтим токены
          const a = await smarts?.realEstate.mint(
            address,
            "1000000000000000000000000000000000000"
          );
          console.log("Tokens minted:");
          console.log(a);

          // Получаем баланс
          await smarts?.realEstate
            .balanceOf(address)
            .then((res) => setPayableBalance(res));
        } catch (err) {
          console.log("Error during minting");
          console.log(err);
        }
      }
    };

    mintTokens();
  }, [isConnected, walletProvider, address, smarts]);

  return (
    <div className={s.main}>
      <div className={s.info}>
        <p className={s.info__balance}>${payableBalance} USDT</p>
        <div className={s.info__estimatedWrap}>
          <p className={s.info__estimatedText}>
            Estimated Rental Return: {data && data.estimated_rental_return}%/
            year
          </p>
          <p className={s.info__estimatedText}>
            Estimated Capital Appreciation:{" "}
            {data && data.estimated_capital_appreciation}%/ year
          </p>
        </div>
        <p className={s.info__estimatedText}>
          Estimated Yearly Return:
          <span>13 - 22% / year</span>
        </p>
      </div>
      <div className={s.sharesSold}>
        <div className={s.sharesSold__top}>
          <p className={s.sharesSold__title}>Shares Sold</p>
          <span>{Math.round(soldTokens)}%</span>
        </div>
        <div className={s.sharesSold__progress}>
          <div
            className={s.sharesSold__progressLine}
            style={{ width: data && `${soldTokens}%` }}
          ></div>
        </div>
        <p className={s.sharesSold__text}>
          <span>
            ${" "}
            {data && (data.token_price * data.total_tokens * soldTokens) / 100}
          </span>{" "}
          / $ {data && data.token_price * data.total_tokens}
          ,000
        </p>
      </div>
      <div className={s.wrap}>
        <div className={s.balance__wrap}>
          <p className={s.balance}>Token price:</p>
          <span className={s.balance__val}>
            {data ? data.token_price : ""} USDT
          </span>
        </div>
        <div className={s.balance__wrap}>
          <p className={s.balance}>Balance:</p>
          <span className={s.balance__val}>{payableBalance} USDT</span>
        </div>
      </div>
    </div>
  );
};
