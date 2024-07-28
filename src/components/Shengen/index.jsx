import { React, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetShengenImagesQuery } from "../../service";
import { setCountry } from "../../slice";
import { useTranslation } from "react-i18next";

const Country = () => {
  const { data: countries, isLoading } = useGetShengenImagesQuery();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [images, setImages] = useState({});

  useEffect(() => {
    if (countries) {
      dispatch(setCountry(countries));
      const loadImages = async () => {
        const newImages = {};
        for (const country of countries) {
          try {
            newImages[country.nameEn] = (
              await import(`../../assets/images/Shengen/${country.nameEn}.png`)
            ).default;
          } catch (err) {
            console.error(`Error loading image for ${country.nameEn}:`, err);
          }
        }
        setImages(newImages);
      };
      loadImages();
    }
  }, [countries, dispatch]);

  return (
    <section className={`${styles.country} container`}>
      <div className={styles.routes}>
        <a href="/">{t("main")} /</a>
        <span>{t("schengen")}</span>
      </div>
      <h1>{t("schengen")}</h1>

      <div className={styles.country__visasWrapper}>
        {isLoading ? (
          <div>Loading...</div>
        ) : countries ? (
          countries.map((country) => (
            <Link to={`${country.nameEn}`} key={country.id}>
              <div className={styles.country__visa}>
                <div
                  className={styles.flag}
                  style={{
                    backgroundImage: `url('/src/assets/images/Shengen/${country.nameEn}.png')`,
                  }}
                ></div>
                <p>{i18n.language === "en" ? country.nameEn : country.name}</p>
              </div>
            </Link>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </section>
  );
};

export default Country;
