import { React, useEffect } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetOtherImagesQuery } from '../../service';
import { setOther } from '../../slice';
import { useTranslation } from 'react-i18next';

const Country = () => {
  const { data: countries, isLoading } = useGetOtherImagesQuery();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (countries) {
      dispatch(setOther(countries));
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
                <img src={`data:image/png;base64,${countries.flag}`} alt='flag' />
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
