import s from "./Steps.module.scss";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";
import { Link } from "react-router-dom";

export const Steps = () => {
  const data = [
    {
      img: step1,
      title: "Sign up and Pass Verification",
      width: "80%",
      height: "75%",
    },
    {
      img: step2,
      title: "Select a ready-to-rent property",
      width: "100%",
      height: "65%",
    },
    {
      img: step3,
      title: "Top up as you would like",
      width: "80%",
      height: "75%",
    },
    {
      img: step4,
      title: "Buy digital property for only 100$",
      width: "90%",
      height: "50%",
    },
  ];
  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__title}>
        Start <span>earning rental income </span> online in just
        <span> four simple steps</span> and become a digital property owner
      </h1>
      <div className={s.main__content}>
        {data.map((item, index) => (
          <div key={index} className={s.card}>
            <div className={s.card__num}>{index + 1}</div>
            <img
              src={item.img}
              alt="steps"
              className={s.card__img}
              width={item.width}
              height={item.height}
            />
            <p className={s.card__title}>{item.title}</p>
          </div>
        ))}
      </div>
      <Link to="/properties">
        <button className={s.main__button}>browse Properties</button>
      </Link>
    </div>
  );
};
