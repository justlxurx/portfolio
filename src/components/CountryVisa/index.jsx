import { React, useState, useEffect, Fragment } from "react";
import styles from "./styles.module.scss";
import { useGetCountryInfoFromNameQuery } from "../../service";
import { getIdFromURL, getId } from "../../helpers";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountry } from "../../slice";

const Visa = () => {
  const zone = getId(window.location.pathname);
  const path = getIdFromURL(window.location.pathname);
  const { data: country, isLoading } = useGetCountryInfoFromNameQuery(path);
  console.log(country);
  const { t, i18n } = useTranslation();
  const [images, setImages] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (country) {
      dispatch(getCountry(country));
      const loadImages = async () => {
        const newImages = {};
        try {
          const image = (
            await import(
              `../../assets/images/Other/${country.countryNameEn}.png`
            )
          ).default;
          newImages[country.countryNameEn] = image;
        } catch (err) {
          console.error(
            `Error loading image for ${country.countryNameEn}:`,
            err
          );
        }
        setImages(newImages);
      };
      loadImages();
    }
  }, [country, dispatch]);

  return (
    <section className={`${styles.visa} container`}>
      {isLoading ? (
        <div>loading...</div>
      ) : country ? (
        <>
          <ul className={styles.routedList}>
            <li>
              <NavLink exact to="/">
                {t("main")} /
              </NavLink>
            </li>
            <li>
              {zone == "shengen" ? (
                <NavLink to="/shengen"> {t("shengen")} /</NavLink>
              ) : (
                <NavLink to="/others">{t("other")}/</NavLink>
              )}
            </li>
            <li>
              {" "}
              {i18n.language === "en"
                ? country.countryNameEn
                : country.countryName}
            </li>
          </ul>
          <div className={styles.visa__typesWrapper}>
            <div className={styles.visa__typesWrapperLinks}>
              {country.visaCountries.map((visas, idx) => (
                <a href={`#${visas.visaNameEn}`} key={idx}>
                  <button>
                    {i18n.language == "en" ? visas.visaNameEn : visas.name}
                  </button>
                </a>
              ))}
            </div>
            <div
              className={styles.visa__countryWrapper}
              style={{
                backgroundImage: `url('/src/assets/images/Other/${country.countryNameEn}_img.png')`,
              }}
            >
              <div className={styles.visa__country}>
                <img
                  src={images[country.countryNameEn]}
                  alt={`${country.countryNameEn}`}
                  className={styles.flag}
                />
                <h1 className={styles.visa__countryName}>
                  {i18n.language === "en"
                    ? country.countryNameEn
                    : country.countryName}
                </h1>
              </div>
              <p className={styles.visa__info}>
                {t("price")} <br />
                <b> {country.price} KZT </b> <br />
                {t("deadline")} <br />
                <b>
                  {" "}
                  {country.deadline == 1 ? (
                    <>
                      {" "}
                      {t("deadlineDays1")} {country.deadline}{" "}
                      {t("deadlineDays3")}
                    </>
                  ) : (
                    <>
                      {t("deadlineDays1")} {country.deadline}{" "}
                      {t("deadlineDays2")}{" "}
                    </>
                  )}
                </b>
              </p>
            </div>
          </div>
          <div className={styles.mobileWrapper}>
            {country.visaCountries.map((visas, idx) => (
              <div
                className={styles.mobileWrapper__visaType}
                key={idx}
                id={visas.visaNameEn}
              >
                <div className={styles.mobileWrapper__title}>
                  {i18n.language === "en" ? visas.visaNameEn : visas.name}
                </div>
                <div
                  className={`${styles.mobileWrapper__text} ${
                    visas.visaDoc && styles.textWrap
                  }`}
                >
                  <p>
                    {i18n.language === "en"
                      ? visas.visaTextEn.split("\n").map((line, index) => (
                          <Fragment key={index}>
                            {line}
                            <br />
                          </Fragment>
                        ))
                      : visas.visaText.split("\n").map((line, index) => (
                          <Fragment key={index}>
                            {line}
                            <br />
                          </Fragment>
                        ))}
                  </p>
                  {visas.visaDoc && (
                    <div
                      className={styles.doc}
                      style={{
                        backgroundImage: `url('/src/assets/images/Other/doc/${visas.id}.png')`,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.visa__bottomText}>
            <h1 className={styles.visa__title}>
              {i18n.language === "en" ? country.titleEn : country.title}
            </h1>
            {/* <p> {i18n.language === 'en' ? country.textEn : country.text}</p> */}
            <p className={styles.visa__text}>
              {i18n.language === "en" ? (
                <>
                  {" "}
                  {country.textEn.split("\n").map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}{" "}
                </>
              ) : (
                <>
                  {" "}
                  {country.text.split("\n").map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}{" "}
                </>
              )}
            </p>
          </div>
        </>
      ) : (
        <div>No data available</div> // Если country не определен, отображаем сообщение об отсутствии данных
      )}
    </section>
  );
};

export default Visa;
