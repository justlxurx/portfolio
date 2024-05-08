import s from "./Numbers.module.scss";

export const Numbers = () => {
  const num = [
    {
      title: "Total $ DAI Stacked",
      value: "900,000,000",
    },
    {
      title: "% of $ DAI Stacked",
      value: "70%",
    },
    {
      title: "Reward",
      value: "1280%",
    },
    {
      title: "Total rewards",
      value: "999,990,000",
    },
  ];
  return (
    <section className={`${s.numbersSection} ${s.container}`}>
      {num.map((item, id) => (
        <div className={s.numbers} key={id}>
          <p className={s.numbers__title}>{item.title}</p>
          <span className={s.numbers__value}>{item.value}</span>
        </div>
      ))}
    </section>
  );
};
