import s from "./Card.module.scss";
import a from "../../assets/images/img1.png";
import Cancun from "../../assets/images/Cancun.svg";
import { manageImgApi } from "../../api/property/manageImg";
import { ReactNode, useEffect, useState } from "react";

export const Card = ({
  name,
  country,
  price,
  rental,
  capital,
  id,
  token_price,
  total_tokens,
  soldTokens,
  dash,
  width,
}: {
  name: string;
  country: string;
  price: string | number;
  rental: string;
  capital: string;
  id: number;
  token_price?: number;
  total_tokens?: number;
  soldTokens?: number;
  dash?: boolean;
  width?: string;
}) => {
  const [mainImg, setMainImg] = useState();
  useEffect(() => {
    const fetchImg = async () => {
      try {
        const a = await manageImgApi.getImg(id);
        if (a && a[0] && a[0].image_url) {
          setMainImg(a[0].image_url);
          console.log("Изображение: " + a[0].image_url);
        }
      } catch (error) {
        // console.error("Failed to fetch properties", error);
      }
    };

    fetchImg();
  }, [id]);
  return (
    <div className={s.apartment} style={{ width: width }}>
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>{name}</p>
        <div className={s.apartment__country}>
          {/* <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} /> */}
          <p className={s.apartment__countryName}>{country}</p>
        </div>
      </div>
      {/* <p className={s.apartment__info}>Sold and Rented since APR 04. 2022</p> */}

      <img
        src={mainImg ? `https://minio.hotcode.kz/${mainImg}` : ""}
        alt="img1"
        className={s.apartment__img}
      />

      <div className={s.apartment__priceWrap}>
        <p className={s.apartment__price}>${price} USDT</p>
        <span>1985/2200</span>
      </div>
      {dash ? (
        <>
          <div className={s.apartment__percents}>
            <p>
              Estimated Rental Return: {rental} <br />
              Estimated Capital Appreciation: {capital}
            </p>
          </div>
          <div className={s.valsWrap}>
            <div className={s.vals}>
              <p className={s.vals__title}>You Invested</p>
              <span>X</span>
            </div>
            <div className={s.vals}>
              <p className={s.vals__title}>You Received</p>
              <span>Y</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={s.apartment__percents}>
            <p>
              Estimated Rental <br /> Return:
            </p>
            <span>{rental}%/year</span>
          </div>
          <div className={s.apartment__percents}>
            <p>
              Estimated Capital <br /> Appreciation:
            </p>
            <span>{capital}%/year</span>
          </div>
          <div className={s.apartment__percents}>
            <p>
              Estimated Yearly <br /> Return::
            </p>
            <span>13 - 22% /year</span>
          </div>
          <div className={s.apartment__progress}>
            <div className={s.progressTop}>
              <p className={s.progressTop__title}> Shares Sold: </p>
              <p className={s.progressVal}>
                <span>{(token_price * total_tokens * soldTokens) / 100}</span>/
                {token_price * total_tokens}
              </p>
            </div>
            <div className={s.progressBottom}>
              <div className={s.progressLine}>
                <div
                  className={s.progressLineInner}
                  style={{ width: `${soldTokens}` }}
                ></div>
              </div>
              <p className={s.progressPer}>{soldTokens}%</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
