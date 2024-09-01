import s from "./Card.module.scss";
import a from "../../assets/images/img1.png";
import Cancun from "../../assets/images/Cancun.svg";
import { Link } from "react-router-dom";

export const Card = ({
  name,
  img,
  country,
  price,
  rental,
  capital,
}: {
  name: string;
  img: any;
  country: string;
  price: string | number;
  rental: string;
  capital: string;
}) => {
  return (
    <div className={s.apartment}>
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>{name}</p>
        <div className={s.apartment__country}>
          <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} />
          <p className={s.apartment__countryName}>{country}</p>
        </div>
      </div>
      {/* <p className={s.apartment__info}>Sold and Rented since APR 04. 2022</p> */}
      <img src={img} alt="img1" className={s.apartment__img} />
      <div className={s.apartment__priceWrap}>
        <p className={s.apartment__price}>${price} USDT</p>
        <span>1985/2200</span>
      </div>
      <div className={s.apartment__percents}>
        <p>Estimated Rental Return: {rental}%</p>
        <p>Estimated Capital Appreciation: {capital}%</p>
      </div>
      <div className={s.apartment__progress}>Progress</div>
    </div>
  );
};
