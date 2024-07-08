import { React, useEffect } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetShengenImagesQuery } from '../../service';
import { setShengen } from '../../slice';
import { useTranslation } from 'react-i18next';

const Country = () => {
  const { data: countries, isLoading } = useGetShengenImagesQuery();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (countries) {
      dispatch(setShengen(countries));
    }
  }, [countries, dispatch]);
  return (
    <section className={styles.country}>
      <div className={styles.routes}>
        <a href='/'>Главная /</a>
        <span>Шенгенская зона</span>
      </div>
      <h1>ШЕНГЕНСКАЯ ЗОНА</h1>

      <div className={styles.country__visasWrapper}>
        {isLoading ? (
          <div>Loading...</div>
        ) : countries ? (
          countries.map((country) => (
            <Link to={`${country.nameEn}`} key={country.id}>
              <div className={styles.country__visa}>
                <img src={`data:image/png;base64,${country.image}`} alt={'flag'} />
                <p>{i18n.language === 'en' ? country.nameEn : country.name}</p>
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
