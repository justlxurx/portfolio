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

  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await managePropertyApi.get(id);
        setData(res);
        console.log("Getting data " + res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (isConnected) {
      smarts?.realEstate
        .balanceOf(address!)
        .then((res) => setPayableBalance(res));
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
          Token price: <span>{data ? data.token_price : ""} USDT</span>
        </p>
        <p className={s.balance}>
          Balance: <span>{payableBalance} USDT</span>
        </p>
      </div>
    </div>
  );
};
