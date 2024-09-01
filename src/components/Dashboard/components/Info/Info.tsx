import { Exchange } from "../Exchange/Exchange";
import s from "./Info.module.scss";
import { useSmarts } from "../../../../hooks/useSmart.ts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useState, useEffect } from "react";

export const Info = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const { smarts } = useSmarts();
  const { walletProvider } = useWeb3ModalProvider();
  const [payableBalance, setPayableBalance] = useState<string>("0");

  useEffect(() => {
    if (isConnected) {
      smarts?.usdt.balanceOf(address!).then((res) => setPayableBalance(res));
    }
  }, [isConnected, walletProvider, address, smarts]);

  return (
    <div className={s.main__left}>
      <div className={s.info}>
        <div className={s.info__wrap}>
          <p className={s.info__title}>Your Current Balance:</p>
          <p className={s.info__value}>{payableBalance} USDT</p>
        </div>
        <div className={s.info__wrap}>
          <p className={s.info__title}>You Invested:</p>
          <p className={s.info__value}>X</p>
        </div>
        <div className={s.info__wrap}>
          <p className={s.info__title}>You Received Dividends:</p>
          <p className={s.info__value}>Y</p>
        </div>
      </div>
      <Exchange />
    </div>
  );
};
