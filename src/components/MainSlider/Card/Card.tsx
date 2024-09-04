import s from "./Card.module.scss";
import a from "../../../assets/images/img1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { manageImgApi } from "../../../api/property/manageImg";

export const Card = ({
  id,
  name,
  rental,
  capital,
  token_price,
  location,
  img,
}: {
  id: number;
  name: string;
  rental: string;
  capital: string;
  token_price: string;
  location: string;
  img: any;
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
    <Link to={`/properties/${id}`}>
      <div className={s.apartment}>
        <div className={s.apartment__wrap}>
          <p className={s.apartment__name}>
            Sold and Rented since APR 04. 2022
          </p>
        </div>
        <img
          src={`https://minio.hotcode.kz/${mainImg}`}
          alt="img1"
          className={s.apartment__img}
        />
        <p className={s.apartment__info}>
          {/* Karra Loft 3A */}
          {location}
        </p>
        <div className={s.apartment__priceWrap}>
          <p className={s.apartment__price}>{token_price}$</p>
          <span>1985/2200</span>
        </div>
        <div className={s.apartment__percents}>
          <p>Rental Return: {rental}%</p>
          <p>Value Growth: {capital}%</p>
        </div>
        <div className={s.apartment__progress}>
          Investors get paid
          <span>22,357$</span>
        </div>
      </div>
    </Link>
  );
};
