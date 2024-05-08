import s from "./FeaturedIn.module.scss";
import { Finfold } from "../../assets/icons/finbold";
import { BitcoinistIcon } from "../../assets/icons/bitcoinist";
import { NewBts } from "../../assets/icons/NewsBTC";
import { InsideBitcoinist } from "../../assets/icons/inside_bitcoins";
import { Technopedia } from "../../assets/icons/technopedia";

export const FeaturedIn = () => {
  return (
    <section className={`${s.main} ${s.container}`}>
      <p className={s.main__title}>Featured in</p>
      <div className={s.main__logos}>
        <Finfold />
        <BitcoinistIcon />
        <NewBts />
        <InsideBitcoinist />
        <Technopedia />
      </div>
    </section>
  );
};
