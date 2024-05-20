import s from "./Footer.module.scss";
import Dog from "../../assets/images/dog.png";
import logo from "../../assets/images/logo_white.svg";
import telega from "../../assets/images/telega.svg";
import x from "../../assets/images/x.svg";

export const Footer = () => {
  return (
    <footer className={`${s.container} ${s.footerSection}`}>
      <div className={s.footerSection__top}>
        <img src={Dog} alt="dog" className={s.dog} />
        <div className={s.footerSection__icons}>
          <img src={logo} alt="dog" className={s.logo} />
          <div className={s.social}>
            <a href="">
              <img src={telega} alt="telega" className={s.telega} />
            </a>
            <a href="http://twitter.com/doggyai" target="_blank">
              <img src={x} alt="x" className={s.xSocial} />
            </a>
          </div>
        </div>
      </div>
      <p className={s.text}>
        Investing in 'DoggyAI' is risky and may lead to loss of capital. Returns
        are not guaranteed. Not financial advice. DYOR.
      </p>
    </footer>
  );
};
