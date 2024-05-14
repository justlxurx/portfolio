import s from "./Main.module.scss";
import { Wallet } from "./components/Wallet/Wallet";
import logo from "../../assets/images/logo_white.svg";

export const Main = () => {
  return (
    <section className={`${s.main} ${s.container}`}>
      <div className={s.main__content}>
        <div className={s.main__heading}>
          <img src={logo} alt="logo" className={s.logo} />
          <p className={s.main__text}>The Future of Trading</p>
        </div>
        <div className={s.main__wallet}>
          <Wallet />
        </div>
      </div>
    </section>
  );
};
