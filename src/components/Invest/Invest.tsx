import s from "./Invest.module.scss";
import { Dollar } from "../../assets/icons/dollar";
import { Smile } from "../../assets/icons/smile";
import { Exit } from "../../assets/icons/exit";

export const Invest = () => {
  const data = [
    {
      img: <Dollar />,
      title: "Start with only 100$",
      description: (
        <p className={s.description}>
          We divide properties into equal <span>$100</span>
          fractions. Invest small amounts monthly in high-yield real estate and
          earn up to <span>-16.3% annual rental return</span>
        </p>
      ),
    },
    {
      img: <Smile />,
      title: "Passive Income",
      description: (
        <p className={s.description}>
          <span>Avoid the hassle</span> of paperwork and managing properties.
          Let our <span>real estate experts</span> take care of everything for
          you.
        </p>
      ),
    },
    {
      img: <Exit />,
      title: "Exit whenever you want",
      description: (
        <p className={s.description}>
          <span>Easily sell your fractions</span> on the secondary market with
          just a few clicks and <span>quickly retrieve your investments.</span>
        </p>
      ),
    },
  ];
  return (
    <div className={`${s.main} container`}>
      <div className={s.main__textWrap}>
        <p className={s.main__para}>
          Invest in real estate by purchasing fractional shares
        </p>
        <h1 className={s.main__title}>
          <span>Co-own property</span> with other investors and{" "}
          <span>earn</span> proportional <span>rental income</span>
        </h1>
      </div>
      <div className={s.main__cards}>
        {data.map((item, index) => (
          <div key={index} className={s.card}>
            <div className={s.card__img}>{item.img}</div>
            <div className={s.card__info}>
              <h1 className={s.card__heading}>{item.title}</h1>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
