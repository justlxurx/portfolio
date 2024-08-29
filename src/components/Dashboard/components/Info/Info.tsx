import { Exchange } from "../Exchange/Exchange";
import s from "./Info.module.scss";

export const Info = () => {
  return (
    <div className={s.main__left}>
      <div className={s.info}>
        <div className={s.info__wrap}>
          <p className={s.info__title}>Your Current Balance:</p>
          <p className={s.info__value}>100 USDT</p>
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
