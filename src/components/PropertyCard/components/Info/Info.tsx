import s from "./Info.module.scss";
import dollar from "../../../../assets/icons/dollar.svg";
import home from "../../../../assets/icons/home.svg";
import infoImg from "../../../../assets/icons/info.svg";
import { characacteristicsApi } from "../../../../api/property/manageCharacteristics";
import { useEffect, useState } from "react";

export const Info = ({ data, id }: { data: any; id: number }) => {
  const [info, setInfo] = useState([]);
  // const data1 = [
  //   {
  //     title: "Complex and Infrastructure:",
  //     text: [
  //       "30-year leasehold with guaranteed extension",
  //       "Large panoramic pool",
  //       "Fitness center, SPA, and sauna",
  //       "Lounge area with a fireplace",
  //       "Covered parking, private access road",
  //       "Reception, premium concierge service, elevator ",
  //     ],
  //   },
  //   {
  //     title: "Each apartment is ready for living or renting:",
  //     text: [
  //       "Triple waterproofing",
  //       "Centralized utilities",
  //       "Well-designed kitchen with appliances",
  //       "Unique for Bali! Private washer and dryer",
  //       "Smart storage system",
  //       "TV, Internet, two air conditioners",
  //       "Bathtub, shower",
  //     ],
  //   },
  // ];
  const list = [
    "Payback period: 7 years",
    "100% capitalization in 8 years",
    "Guaranteed returns from the management company",
    "Bali Invest Club",
  ];
  // const apartment = ["1 Bed", "1 Bath", "49 m²", "Commerce"];

  const renderListItem = (
    quantity: number,
    singular: string,
    plural: string
  ) => {
    return quantity ? (
      <li className={s.apartment__listItem}>
        {quantity} {quantity === 1 ? singular : plural}
      </li>
    ) : null;
  };

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await characacteristicsApi.get(id);
        setInfo(res);
        console.log("Res: " + res);
      } catch (err) {
        console.log("Error when getting info :" + err);
      }
    };
    fetchInfo();
  }, [id]);

  return (
    <>
      <div className={s.apartment}>
        <div className={s.apartment__about}>
          <div className={s.apartment__aboutTitleWrap}>
            <img src={infoImg} alt="info" />
            <p className={s.apartment__aboutTitle}>About apartments</p>
          </div>
          <ul className={s.apartment__list}>
            {renderListItem(data.bedrooms, "Bed", "Beds")}
            {renderListItem(data.balconies, "Balcony", "Balconies")}
            {renderListItem(data.bathrooms, "Bathroom", "Bathrooms")}
            {renderListItem(data.kitchens, "Kitchen", "Kitchens")}
            {renderListItem(data.garages, "Garage", "Garages")}
            {renderListItem(data.living_rooms, "Living room", "Living rooms")}
            {renderListItem(data.terraces, "Terrace", "Terraces")}
            {data.property_area && (
              <li className={s.apartment__listItem}>{data.property_area} m²</li>
            )}
            {data.property_type && (
              <li className={s.apartment__listItem}>{data.property_type}</li>
            )}
            {/* {apartment.map((index) => (
                <li className={s.apartment__listItem} key={index}>
                  {index}
                </li>
              ))} */}
          </ul>
        </div>
        <div className={s.apartment__about}>
          <div className={s.apartment__aboutTitleWrap}>
            <img src={home} alt="home" />
            <p className={s.apartment__aboutTitle}> About the Property</p>
          </div>
          <div className={s.apartment__aboutPropertyWrap}>
            <p className={s.apartment__aboutPropertyText}>{data.description}</p>
          </div>
        </div>
        <div className={s.apartment__about}>
          <div className={s.apartment__aboutTitleWrap}>
            <img src={dollar} alt="dollar" />
            <p className={s.apartment__aboutTitle}>Investment Appeal</p>
          </div>
          <div className={s.apartment__aboutPropertyWrap}>
            <ul className={s.list}>
              {list.map((item, index) => (
                <li key={index} className={s.apartment__aboutPropertyText}>
                  <span></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {info && (
        <div className={s.main}>
          {info.map((item, index) => (
            <div key={index} className={s.info}>
              <h1 className={s.info__title}>{item.characteristic_name}</h1>
              <ul className={s.info__list}>
                {/* {item.text.map((a, index) => (
                <li key={index} className={s.info__listItem}>
                  <span className={s.circle}></span>
                  {a}
                </li>
              ))} */}
                {item.characteristic_value}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
