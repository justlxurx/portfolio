import { React, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetOtherCountryQuery } from '../../service';
import { setCountry } from '../../slice';
import { useTranslation } from 'react-i18next';

const Country = () => {
  const { data: countries, isLoading } = useGetOtherCountryQuery();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [images, setImages] = useState({});

  // useEffect(() => {
  //   if (countries) {
  //     dispatch(setCountry(countries));
  //   }
  // }, [countries, dispatch]);

  useEffect(() => {
    if (countries) {
      dispatch(setCountry(countries));
      const loadImages = async () => {
        const newImages = {};
        for (const country of countries) {
          try {
            newImages[country.countryNameEn] = (await import(`../../assets/images/Other/${country.countryNameEn}.png`)).default;
          } catch (err) {
            console.error(`Error loading image for ${country.countryNameEn}:`, err);
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
        <a href='/'>{t('main')} /</a>
        <span>{t('other')}</span>
       
      </div>
      <h1>{t('other')}</h1>

      <div className={styles.country__visasWrapper}>
        {isLoading ? (
          <div>Loading...</div>
        ) : countries ? (
          countries.map((countries, index) => (
            <Link to={`${countries.countryNameEn}`} key={index}>
              <div className={styles.country__visa}>
                {/* <img src={images[countries.countryNameEn] } alt={`${countries.countryNameEn}`}  />  */}
                <div className={styles.flag} style={{ backgroundImage:`url('/src/assets/images/Other/${countries.countryNameEn}.png')`}}></div>  
                <p>{i18n.language === 'en' ? countries.countryNameEn : countries.countryName}</p>
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
