import s from "./Faq.module.scss";
import { useTranslation } from "react-i18next";

import { Question } from "./Card/Card";

export const Faq = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("faq.q1"),
      text: t("faq.a1"),
    },
    {
      title: t("faq.q2"),
      text: t("faq.a2"),
    },
    {
      title: t("faq.q3"),
      text: t("faq.a3"),
    },
    {
      title: t("faq.q4"),
      text: t("faq.a4"),
    },
    {
      title: t("faq.q5"),
      text: t("faq.a5"),
    },
    {
      title: t("faq.q6"),
      text: t("faq.a6"),
    },
  ];

  return (
    <div className={s.background}>
      <section className={"container"} id="faq">
        <div className={s.faq}>
          <p className={s.faq__title}>FAQ</p>
          <p className={s.faq__subtitle}>
            Find a short introduction to Binaryx and a step-by-step instruction
            for investing in our Beginner's Guide{" "}
          </p>
          <div className={s.faq__contentWrapper}>
            {data.map((item, id) => (
              <Question question={item.title} answer={item.text} key={id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
