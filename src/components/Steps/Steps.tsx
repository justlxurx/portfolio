import s from "./Steps.module.scss";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step4 from "../../assets/images/step4.png";
import { Link } from "react-router-dom";

export const Steps = () => {
  const data = [
    {
      img: step1,
      title: "Sign Up or Log In",
      width: "55%",
      height: "75%",
    },
    {
      img: step2,
      title: "Select A Property To Purchase",
      width: "85%",
      height: "65%",
    },
    {
      img: step4,
      title:
        "Pay via any cryptocurrency of your choice or other options through our payment gateway",
      width: "70%",
      height: "50%",
    },
  ];
  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__title}>
        Start building your real estate <br /> portfolio in
        <span> 3 simple steps</span>
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
        <button className={s.main__button}>Browse Properties</button>
      </Link>
    </div>
  );
};
