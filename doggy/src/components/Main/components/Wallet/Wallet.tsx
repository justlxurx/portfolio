import s from "./Wallet.module.scss";
import { Input } from "../Input/Input";
import { MouseEventHandler } from "react";
import CountdownTimer from "../../../../features/countdown/Countdown";
import eth from "../../../../assets/images/eth.svg";
import circle from "../../../../assets/images/circle.svg";
import usdt from "../../../../assets/images/usdt.svg";

export const Wallet = ({
  handleShowModal,
}: {
  handleShowModal: MouseEventHandler<HTMLButtonElement>;
}) => {
  const targetDate = new Date("2024-05-20T00:00:00");

  return (
    <section className={s.wallet}>
      <p className={s.wallet__title}>Next Price Increase In</p>
      <CountdownTimer targetDate={targetDate} />
      <p className={s.raisedValue}>USD RAISED: $810,274.41 / $1,123,057</p>
      <div className={s.priceInc}>
        <input type="radio" id="priceInc" />
        <label htmlFor="#priceInc"> Until Price Increase</label>
      </div>
      <div className={s.wallet__textWrapper}>
        <p className={s.wallet__text}>
          YOUR PURCHASED <span>$DOGYAI</span> = 0
        </p>
        <p className={s.wallet__text}>
          YOUR STAKEABLE <span>$DOGYAI</span> = 0
        </p>
      </div>
      <div className={s.coinst}>
        <span>1 $DOGYAI = $0.000703</span>
        <div className={s.coinst__buttons}>
          <button className={s.coinst__button}>
            <img src={eth} alt="eth" />
            ETH
          </button>
          <button
            className={s.coinst__button}
            style={{ background: "rgba(255, 114, 14, 0.3)" }}
          >
            <img src={usdt} alt="usdt" />
            USDT
          </button>
        </div>
      </div>
      <div className={s.inputs}>
        <div className={s.inputWrapper}>
          <div className={s.inputTopText}>
            <p>ETH you pay</p>
            <span>max</span>
          </div>
          <Input>
            <img src={eth} alt="eth" className={s.inputImg} />
          </Input>
        </div>
        <div className={s.inputWrapper}>
          <div className={s.inputTopText}>
            <p>$DOGYAI you recieve</p>
          </div>
          <Input>
            <img src={circle} alt="circle" className={s.inputImg} />
          </Input>
        </div>
      </div>
      <div className={s.buttonWrapper}>
        <button onClick={handleShowModal} className={s.connectButton}>
          Connect wallet
        </button>
        <button className={s.buyButton}>Buy with BNB</button>
      </div>
    </section>
  );
};
