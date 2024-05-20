import s from "./DoggyAI.module.scss";
import { Learn } from "./Learn/Learn";

export const DoggyAI = () => {
  const data = [
    {
      title: "Meme-tastic Fun",
      text: "Who said crypto has to be all serious? DoggyAI is here to make you laugh while you ride the wave of the next big meme sensation. Join the pack and let’s create viral moments together!",
    },
    {
      title: "AI Awesomeness",
      text: "Our AI isn’t just smart it’s pawsitively genius. From clever bots to futuristic AI-generated memes, DoggyAI’s tech will fetch the best for our community. Who knew AI could be this adorable?",
    },
    {
      title: "Community & Hype",
      text: "At DoggyAI, we’re all about the pack mentality. Our community is the heartbeat of our project, and we thrive on the excitement you bring. Let’s howl at the moon and make some noise!",
    },
    // {
    //   title: "Not just a bot",
    //   text: "but an AI-powered crypto trading partner designed to give YOU the advantage you’ve been searching for.",
    // },
  ];
  return (
    <section className={`${s.main} ${s.container}`} id="doggyai">
      <div className={s.doggyAI}>
        <h3 className={s.doggyAI__title}>Why DoggyAI ($DOGYAI) ?</h3>
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
