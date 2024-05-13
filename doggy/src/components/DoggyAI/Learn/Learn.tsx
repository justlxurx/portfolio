import s from "./Learn.module.scss";

export const Learn = () => {
  return (
    <section className={s.learn}>
      <div className={s.learn__textWrapper}>
        <h3 className={s.learn__title}>Outsmart the market with $DOGYAI -</h3>
        <p className={s.learn__subtitle}>DoggyAi’s Predictive Technology</p>
        <p className={s.learn__text}>
          DoggyAI’s predictive technology, combined with its user-friendly AI
          interface, allows you to instantly scour the crypto market for those
          hidden gems. Ask DoggyAI to find your next trade and it delivers the
          market analysis to help you win more often. Then seamlessly swap,
          MEV-free, through decentralized exchanges
        </p>
        <p className={s.learn__textMobile}>
          DoggyAI’s predictive technology, combined with its user-friendly AI
          interface, allows you to
          <span className={s.learn__boldText}>
            {" "}
            instantly scour the crypto market{" "}
          </span>
          for those hidden gems. <br /> <br />
          <span className={s.learn__boldText}>Ask DoggyAI</span> to find your
          next trade and it delivers the market analysis to help you win more
          often. Then seamlessly swap, MEV-free, through decentralized exchanges
        </p>
      </div>
      <button className={s.learn__button}>learn more</button>
    </section>
  );
};
