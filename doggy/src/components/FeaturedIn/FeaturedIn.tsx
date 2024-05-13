import s from "./FeaturedIn.module.scss";
// import { Finfold } from "../../assets/icons/finbold";
// import { BitcoinistIcon } from "../../assets/icons/bitcoinist";
// import { NewBts } from "../../assets/icons/NewsBTC";
// import { InsideBitcoinist } from "../../assets/icons/inside_bitcoins";
// import { Technopedia } from "../../assets/icons/technopedia";
import technopedia from "../../assets/images/technopedia.svg";
import newbts from "../../assets/images/NewsBTC.svg";
import finfold from "../../assets/images/finbold.svg";
import bitcointst from "../../assets/images/bitcoinst.svg";
import insideBit from "../../assets/images/Inside-Bitcoins.svg";
import cryptonew from "../../assets/images/cryptonews.svg";

export const FeaturedIn = () => {
  return (
    <section className={`${s.main} ${s.container}`}>
      <p className={s.main__title}>Featured in</p>
      <div className={s.main__logos}>
        <img src={finfold} alt="finfold" className={s.main__logoImg} />
        <img src={bitcointst} alt="bitcoinist" className={s.main__logoImg} />
        <img src={newbts} alt="newbts" className={s.main__logoImg} />
        <img
          src={insideBit}
          alt="inside-bitcoinist"
          className={s.main__logoImg}
        />
        <img src={cryptonew} alt="cryptonews" className={s.main__logoImg} />
        <img src={technopedia} alt="technopedia" className={s.main__logoImg} />
        {/* <Finfold />
        <BitcoinistIcon />
        <NewBts />
        <InsideBitcoinist />
        <Technopedia /> */}
      </div>
    </section>
  );
};
