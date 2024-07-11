import { React, useState, useEffect, Fragment } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useGetShengenInfoFromNameQuery } from '../../service';
import { getIdFromURL, getId } from '../../helpers';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCountry } from '../../slice';

const Visa = () => {
  const zone = getId(window.location.pathname);
  const path = getIdFromURL(window.location.pathname);
  const { data: country, isLoading } = useGetShengenInfoFromNameQuery(path);
  console.log(country);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (country) {
      dispatch(setCountry(country));
    }
  }, [country, dispatch]);

  return (
    <section className={styles.visa}>
     
      {isLoading ? (
        <div>loading...</div>
      ) : country ? (
        <>
         <ul className={styles.routedList}>
        <li>
          <NavLink exact to='/'>
            {t('main')}/
          </NavLink>
        </li>
        <li>
          {zone == 'shengen' ? (
            <NavLink to='/shengen'>{t('schengen')}/</NavLink>
          ) : (
            <NavLink to='/others'>{t('other')}/</NavLink>
          )}
        </li>
        <li> {i18n.language =='en'? country.nameEn:country.name}</li>
      </ul>
          <div className={styles.visa__typesWrapper}>
            <div className={styles.visa__typesWrapperLinks}>
              {/* {country.visa.map((visas, idx) => (
                <Link to={`${visas.visaName}`} key={idx}>
                  <button>{visas.visaName}</button>
                </Link>
              ))} */}
            </div>
            <div
              className={styles.visa__countryWrapper}
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className={styles.visa__country}>
                <img src={`data:image/png;base64,${country.flag}`} alt='country' />
                <h1>{i18n.language =='en'? country.nameEn:country.name}</h1>
              </div>
              <p className={styles.textWrapper}>
               {t('price')}  <br />
                <b>{country.price} KZT</b> <br />
                {t('deadline')} <br />
                <b>{t('deadlineDays1')} {country.deadline} {t('deadlineDays2')}</b>
              </p>
            </div>
          </div>
          {/* <div className={styles.mobileWrapper}>
            {country.visa.map((visas, idx) => (
              <div className={styles.mobileWrapper__visaType} key={idx}>
                <div className={styles.mobileWrapper__title}>
                  {i18n.language === 'en' ? visas.visaNameEn : visas.visaName}
                </div>
                <div className={styles.mobileWrapper__text}>
                  <p>
                    {i18n.language === 'en'
                      ? visas.visaTextEn.split('\n').map((line, index) => (
                          <Fragment key={index}>
                            {line}
                            <br />
                          </Fragment>
                        ))
                      : visas.visaText.split('\n').map((line, index) => (
                          <Fragment key={index}>
                            {line}
                            <br />
                          </Fragment>
                        ))}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className={styles.visa__bottomText}>
            <h1>{i18n.language === 'en' ? country.titleEn : country.title}</h1>
             <p>
              {i18n.language ==='en'? <> {country.text.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))} </> : <> {country.textEn.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}</>}
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
