import s from "./FeaturedIn.module.scss";
import { Finfold } from "../../assets/icons/finbold";
import { BitcoinistIcon } from "../../assets/icons/bitcoinist";
import { NewBts } from "../../assets/icons/NewsBTC";
import { InsideBitcoinist } from "../../assets/icons/inside_bitcoins";
import { Technopedia } from "../../assets/icons/technopedia";
import { CryptoNews } from "../../assets/icons/cryptonews";
// import technopedia from "../../assets/images/technopedia.svg";
// import newbts from "../../assets/images/NewsBTC.svg";
// import finfold from "../../assets/images/finbold.svg";
// import bitcointst from "../../assets/images/bitcoinst.svg";
// import insideBit from "../../assets/images/Inside-Bitcoins.svg";
// import cryptonew from "../../assets/images/cryptonews.svg";
import { useEffect, useState } from "react";

export const FeaturedIn = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //
  return (
    <section className={`${s.main} ${s.container}`}>
      <p className={s.main__title}>Featured in</p>
      <div className={s.main__logos}>
        {/* <img src={finfold} alt="finfold" className={s.main__logoImg} />
        <img src={bitcointst} alt="bitcoinist" className={s.main__logoImg} />
        <img src={newbts} alt="newbts" className={s.main__logoImg} />
        <img
          src={insideBit}
          alt="inside-bitcoinist"
          className={s.main__logoImg}
        />
        <img src={cryptonew} alt="cryptonews" className={s.main__logoImg} />
        <img src={technopedia} alt="technopedia" className={s.main__logoImg} /> */}
        <Finfold height={isSmallScreen ? 10 : 34} />
        <BitcoinistIcon height={isSmallScreen ? 7 : 26} />
        <NewBts height={isSmallScreen ? 13 : 55} />
        <CryptoNews height={isSmallScreen ? 13 : 54} />
        <InsideBitcoinist height={isSmallScreen ? 16 : 65} />
        <Technopedia height={isSmallScreen ? 12 : 49} />
      </div>
    </section>
  );
};
