import s from "./Modal.module.scss";
import metamask from "../../../../assets/images/metamask.png";
import coinbase from "../../../../assets/images/coinbase.png";
import bw from "../../../../assets/images/bw.png";
import connect from "../../../../assets/images/connect.png";
import { Exit } from "../../../../assets/icons/exit";
import { MouseEventHandler } from "react";

export const Modal = ({
  exit,
}: {
  exit: MouseEventHandler<HTMLButtonElement>;
}) => {
  const data = [
    {
      title: "MetaMask",
      img: metamask,
    },
    {
      title: "Wallet Connect",
      img: connect,
    },
    {
      title: "Coinbase Wallet",
      img: coinbase,
    },
    {
      title: "Best Wallet",
      img: bw,
    },
  ];
  return (
    <section className={s.main}>
      <div className={s.modal}>
        <button className={s.exit} onClick={exit}>
          <Exit />
        </button>
        <p className={s.modal__title}>Connect Wallet</p>
        <div className={s.walletWrapper}>
          {data.map((item, id) => (
            <div key={id} className={s.wallet}>
              {item.title}
              <img src={item.img} alt={item.title} />
            </div>
          ))}
          <button className={s.modal__button}>I don’t have a wallet</button>
        </div>
      </div>
    </section>
  );
};
