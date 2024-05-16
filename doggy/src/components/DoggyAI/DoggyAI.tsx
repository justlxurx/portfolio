import s from "./DoggyAI.module.scss";
import { Learn } from "./Learn/Learn";

export const DoggyAI = () => {
  const data = [
    {
      title: "AI Enhanced Trading",
      text: "An AI interface that’s instant, predictive, and beginner-friendly",
    },
    {
      title: "Seamless Swaps",
      text: "Never miss a golden opportunity again",
    },
    {
      title: "Zero Fees",
      text: "DoggyAI does not charge any fees",
    },
    {
      title: "Not just a bot",
      text: "but an AI-powered crypto trading partner designed to give YOU the advantage you’ve been searching for.",
    },
  ];
  return (
    <section className={`${s.main} ${s.container}`} id="doggyai">
      <div className={s.doggyAI}>
        <h3 className={s.doggyAI__title}>What is DoggyAI ($DOGYAI) ?</h3>
        <p className={s.doggyAI__text}>
          DoggyAI is YOUR Revolutionary AI Trading partner. <br /> With
          unparalleled capabilities, DoggyAI is the ultimate asset <br /> for
          every crypto trader.
        </p>
        <div className={s.doggyAI__content}>
          {data.map((item, id) => (
            <div className={s.card} key={id}>
              <p className={s.card__title}>{item.title}</p>
              <p className={s.card__text}>{item.text}</p>
            </div>
          ))}
        </div>
        <a href="#wallet">
          <button className={s.doggyAI__button}>buy $DOGYAI presale</button>
        </a>
      </div>
      <Learn />
    </section>
  );
};
