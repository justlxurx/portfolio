import s from "./FeaturedIn.module.scss";
import { useTranslation } from "react-i18next";
// import { BI } from "../../assets/icons/bi";
// import { BT } from "../../assets/icons/bt";
// import { CP } from "../../assets/icons/cp";
// import { CT } from "../../assets/icons/ct";
// import { Icobench } from "../../assets/icons/icobench";
// import { CryptoPotato } from "../../assets/icons/cryptopotato";
import { useMobile } from "../../hooks/useMobile";

export const FeaturedIn = () => {
  const isMobile = useMobile();

  const { t } = useTranslation();
  return (
    <section className={`container`}>
      <div className={s.main}>
        <p className={s.main__title}>{t("main.featuredIn")}</p>
        <div className={s.main__logos}>
          {/* <CryptoPotato height={isMobile ? 8.96 : 35.83} />
            <Icobench height={isMobile ? 16.63 : 66.54} />
            <CP height={isMobile ? 11.52 : 46.06} />
            <CT height={isMobile ? 10.97 : 43.87} />
            <BI height={isMobile ? 13.06 : 52.23} />
            <BT height={isMobile ? 17 : 68} /> */}
        </div>
      </div>
    </section>
  );
};
