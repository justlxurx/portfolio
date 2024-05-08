import s from "./Wallet.module.scss";
import { Eth } from "../../../../assets/icons/eth";
import { Usdt } from "../../../../assets/icons/usdt";
import { Input } from "../Input/Input";
import { Logo } from "../../../../assets/icons/logo";
import { MouseEventHandler } from "react";

export const Wallet = ({
  handleShowModal,
}: {
  handleShowModal: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <section className={s.wallet}>
      <p className={s.wallet__title}>Next Price Increase In</p>
      <div className={s.days}>
        <div className={s.days__num}>
          <span className={s.days__numText}>days</span>
          <p className={s.days__numValue}>03</p>
        </div>
        <div className={s.days__num}>
          <span className={s.days__numText}>hours</span>
          <p className={s.days__numValue}>12</p>
        </div>
        <div className={s.days__num}>
          <span className={s.days__numText}>minutes</span>
          <p className={s.days__numValue}>46</p>
        </div>
        <div className={s.days__num}>
          <span className={s.days__numText}>seconds</span>
          <p className={s.days__numValue}>07</p>
        </div>
      </div>
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
            <Eth />
            ETH
          </button>
          <button
            className={s.coinst__button}
            style={{ background: "rgba(255, 114, 14, 0.3)" }}
          >
            <Usdt />
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
            <Eth />
          </Input>
        </div>
        <div className={s.inputWrapper}>
          <div className={s.inputTopText}>
            <p>$DOGYAI you recieve</p>
          </div>
          <Input>
            <Logo />
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
