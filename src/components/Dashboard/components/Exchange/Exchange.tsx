import Input from "../Input/Input";
import s from "./Exchange.module.scss";
import btc from "../../../../assets/icons/btc.svg";
import eth from "../../../../assets/icons/eth.svg";
import { useState } from "react";

export const Exchange = () => {
  const [sendVal, setSendVal] = useState(0);
  const [receiveVal, setReceiveVal] = useState(0);

  return (
    <div className={s.exchange}>
      <h3 className={s.exchange__title}>Exchange</h3>
      <div className={s.exchange__content}>
        <form className={s.exchange__form}>
          <Input
            title="You Send"
            name="sendVal"
            img={btc}
            text="btc"
            type="number"
            value={sendVal}
            onChange={(e) => setSendVal(e.target.value)}
            placeholder="0"
          />
          <Input
            title="You Receive"
            name="receiveVal"
            img={eth}
            text="eth"
            type="number"
            value={receiveVal}
            onChange={(e) => setReceiveVal(e.target.value)}
            placeholder="0"
          />
          <p className={s.exchange__currentRate}>
            <span>Current Rate:</span> 1 BTC = 23.8297381 ETH
          </p>
          <button className={s.exchange__button} type="button">
            Exchange
          </button>
        </form>
      </div>
    </div>
  );
};
