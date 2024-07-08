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
    <section className={styles.country}>
      <div className={styles.routes}>
        <a href='/'>Главная /</a>
        <span>Другие страны</span>
      </div>
      <h1>Другие страны</h1>

      <div className={styles.country__visasWrapper}>
        {isLoading ? (
          <div>Loading...</div>
        ) : countries ? (
          countries.map((countries) => (
            <Link to={`${countries.countryName}`} key={countries.id}>
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
