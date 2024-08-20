import s from "./Faq.module.scss";
import { useTranslation } from "react-i18next";

import { QuestionCard } from "./Card/Card";

export const Faq = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: "What is this platform about?",
      text: "This platform is a real estate investing platform. We help investors get passive income from fractional ownership of properties worldwide. Anyone can pick a home on our Marketplace, become its co-owner in the real world for as little as $100, and enjoy a stable rental income of up to 31% APR.",
    },
    {
      title: "How do I earn passive income?",
      text: "You can buy real estate fractions (tokens) that represent official property ownership. Anyone who buys a fraction becomes a co-owner of this property in the real world and starts getting income from rent. The rental income is distributed proportionally between fraction holders. Let's give an example: for instance, the rental APR is 12%. If you own 1 fraction worth 1005, it will bring you $12 per year. If you've bought 10 fractions worth $1000 in total, you will get $120.",
    },
    {
      title: "When will i start earning?",
      text: t("faq.a3"),
    },
    {
      title: "How do i withdraw my rental income?",
      text: t("faq.a4"),
    },
  ];

  return (
    <div className={`${s.faq} container`} id="faq">
      <p className={s.faq__title}>FAQ</p>
      <div className={s.faq__contentWrapper}>
        {data.map((item, id) => (
          <QuestionCard question={item.title} answer={item.text} key={id} />
        ))}
      </div>
    </div>
  );
};
