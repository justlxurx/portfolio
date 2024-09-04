import s from "./Card.module.scss";
import a from "../../assets/images/img1.png";
import Cancun from "../../assets/images/Cancun.svg";
import { Link } from "react-router-dom";
import { manageImgApi } from "../../api/property/manageImg";
import { useEffect, useState } from "react";

export const Card = ({
  name,
  country,
  price,
  rental,
  capital,
  id,
}: {
  name: string;
  country: string;
  price: string | number;
  rental: string;
  capital: string;
  id: number;
}) => {
  const [mainImg, setMainImg] = useState();
  useEffect(() => {
    const fetchImg = async () => {
      try {
        const a = await manageImgApi.getImg(id);
        setMainImg(a[0].image_url);
        console.log("Изображение: " + a[0].image_url);
      } catch (error) {
        console.error("Failed to fetch properties", error);
      }
    };

    fetchImg();
  }, [id]);
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
      <img
        src={`https://minio.hotcode.kz/${mainImg}`}
        alt="img1"
        className={s.apartment__img}
      />
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
