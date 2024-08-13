import s from "./Card.module.scss";
import a from "../../assets/images/img1.png";
import Cancun from "../../assets/images/Cancun.svg";

export const Card = () => {
  return (
    <div className={s.apartment}>
      <p className={s.apartment__info}>Sold and Rented since APR 04. 2022</p>
      <img src={a} alt="img1" className={s.apartment__img} />
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>Property 1</p>
        <div className={s.apartment__country}>
          <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} />
          <p className={s.apartment__countryName}>Cancun, Mexico</p>
        </div>
      </div>
      <div className={s.apartment__priceWrap}>
        <p className={s.apartment__price}>220.000$</p>
        <span>1985\2200</span>
      </div>
      <div className={s.apartment__percents}>
        <p>Rental Return: 10%</p>
        <p>Value Growth: 12%</p>
      </div>
      <div className={s.apartment__progress}>Progress</div>
    </div>
  );
};
