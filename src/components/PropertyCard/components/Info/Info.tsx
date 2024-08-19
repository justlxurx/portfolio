import s from "./Info.module.scss";
import dollar from "../../../../assets/icons/dollar.svg";
import home from "../../../../assets/icons/home.svg";
import info from "../../../../assets/icons/info.svg";

export const Info = () => {
  const data = [
    {
      title: "Complex and Infrastructure:",
      text: [
        "30-year leasehold with guaranteed extension",
        "Large panoramic pool",
        "Fitness center, SPA, and sauna",
        "Lounge area with a fireplace",
        "Covered parking, private access road",
        "Reception, premium concierge service, elevator ",
      ],
    },
    {
      title: "Each apartment is ready for living or renting:",
      text: [
        "Triple waterproofing",
        "Centralized utilities",
        "Well-designed kitchen with appliances",
        "Unique for Bali! Private washer and dryer",
        "Smart storage system",
        "TV, Internet, two air conditioners",
        "Bathtub, shower",
      ],
    },
  ];
  const list = [
    "Payback period: 7 years",
    "100% capitalization in 8 years",
    "Guaranteed returns from the management company",
    "Bali Invest Club",
  ];
  const apartment = ["1 Bed", "1 Bath", "49 m²", "Commerce"];

  return (
    <>
      <div className={s.apartment}>
        <div className={s.apartment__about}>
          <div className={s.apartment__aboutTitleWrap}>
            <img src={info} alt="info" />
            <p className={s.apartment__aboutTitle}>About apartments</p>
          </div>
          <ul className={s.apartment__list}>
            {apartment.map((index) => (
              <li className={s.apartment__listItem} key={index}>
                {index}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.apartment__about}>
          <div className={s.apartment__aboutTitleWrap}>
            <img src={home} alt="home" />
            <p className={s.apartment__aboutTitle}> About the Property</p>
          </div>
          <div className={s.apartment__aboutPropertyWrap}>
            <p className={s.apartment__aboutPropertyText}>
              A premium complex designed like a 5-star hotel, located on one of
              the main streets in the highly sought-after Canggu area,
              surrounded by rice fields, and just 7 minutes from the ocean and
              world-famous beach clubs.
            </p>
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
      <div className={s.main}>
        {data.map((item, index) => (
          <div key={index} className={s.info}>
            <h1 className={s.info__title}>{item.title}</h1>
            <ul className={s.info__list}>
              {item.text.map((a, index) => (
                <li key={index} className={s.info__listItem}>
                  <span className={s.circle}></span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
