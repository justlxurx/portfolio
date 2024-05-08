import s from "./Footer.module.scss";
import { Telega } from "../../assets/icons/telega";
import { XIcon } from "../../assets/icons/x";
import { LogoDoggy } from "../../assets/icons/logo_doggy";
import Dog from "../../assets/images/dog.png";

export const Footer = () => {
  return (
    <footer className={`${s.container} ${s.footerSection}`}>
      <div className={s.footerSection__top}>
        <img src={Dog} alt="dog" />
        <div className={s.footerSection__icons}>
          <LogoDoggy width={310} height={61} />
          <div className={s.social}>
            <a href="">
              <Telega />
            </a>
            <a href="">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
      <p className={s.text}>
        Investing in 'doggyAI' is risky and may lead to loss of capital. Returns
        are not guaranteed. Not financial advice. DYOR.
      </p>
    </footer>
  );
};
