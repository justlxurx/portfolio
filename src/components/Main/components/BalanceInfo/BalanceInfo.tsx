import s from "./BalanceInfo.module.scss";

export const BalanceInfo = () => {
  return (
    <div className={s.main}>
      <div className={s.info}>
        <p className={s.info__left}>
          120,000
          <br /> USDT
        </p>
        <p className={s.info__right}>
          IPR: <span>20%</span>
          <br />
          APR: <span>10%</span>
        </p>
      </div>
      <div className={s.balance__wrap}>
        <p className={s.balance}>
          Token price: <span>100 USDT</span>
        </p>
        <p className={s.balance}>
          Balance: <span>129 USDT</span>
        </p>
      </div>
    </div>
  );
};
