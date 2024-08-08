import s from "./Main.module.scss";
// import indonesia from "../../assets/icons/indonesia.svg";
import info from "../../assets/icons/info.svg";
import home from "../../assets/icons/home.svg";
import bottom from "../../assets/icons/bottom.svg";
import { useState } from "react";
import { Info } from "./components/Info/Info";
import { MainForm } from "./components/MainForm/MainForm";

export const Main = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const data = [
    {
      title: "Investment Appeal:",
      text: [
        "Payback period: 7 years",
        "100% capitalization in 8 years",
        "Guaranteed returns from the management company",
        "Bali Invest Club",
      ],
    },
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
  return (
    <div className={`${s.main} container`}>
      <div className={s.main__left}>
        <div className={s.apartment__wrap}>
          <p className={s.apartment__name}>Property 1 - Cancun, Mexico</p>
          {/* <div className={s.apartment__country}>
            <img src={indonesia} alt="indonesia" />
            <p className={s.apartment__countryName}>Indonesia, Bali</p>
          </div> */}
        </div>
        <div className={s.apartment__images}>
          <div className={s.apartment__img1}></div>
          <div className={s.apartment__images2}>
            <div className={s.apartment__img2}></div>
            <div className={s.apartment__img3}></div>
            <div className={s.apartment__img4}></div>
          </div>
        </div>
        <div className={s.apartment__about}>
          <div className={s.apartment__aboutTitleWrap}>
            <img src={info} alt="info" />
            <p className={s.apartment__aboutTitle}> About apartments</p>
          </div>
          <div className={s.apartment__aboutItemWrap}>
            <div className={s.apartment__aboutItem}>1 Bed</div>
            <div className={s.apartment__aboutItem}>1 Bath</div>
            <div className={s.apartment__aboutItem}>49 m²</div>
            <div className={s.apartment__aboutItem}>Commerce</div>
          </div>
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
            {show && (
              <div className={s.moreInfoWrap}>
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
            )}
            <button className={s.readMoreButton} onClick={handleShow}>
              <p className={s.readMoreButton__text}>
                {show ? "back" : "...read more"}
              </p>
              <img
                src={bottom}
                alt="bottom"
                style={{ transform: `${show ? "" : "rotate(180deg)"}` }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={s.main__right}>
        <Info />
        <MainForm />
      </div>
    </div>
  );
};
