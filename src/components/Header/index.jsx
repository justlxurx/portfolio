import React, { useState } from 'react';
import styles from './styles.module.scss';
import map from './../../assets/images/map.png';
import clock from './../../assets/images/clock.png';
import phone from './../../assets/images/phone.png';
import insta from './../../assets/images/insta.png';
import whatsapp from './../../assets/images/whatsapp.png';
import telega from './../../assets/images/telega.png';
import logo from './../../assets/images/logo.png';
import Burger from '../Burger';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [isActive, setIsActive] = useState(false);

  function toggleClass(state) {
    setIsActive(state);
  }

  return (
    <section className={styles.navbar}>
      <div className={styles.companyInfo}>
        <div className={styles.companyInfo__address}>
          <img src={map} alt='map' />
          <p>
            {t('addressValue1')} <br /> {t('addressValue2')}
          </p>
        </div>

        <div className={styles.companyInfo__timeWorking}>
          <img src={clock} alt='clock' />
          <p>
            {t('timeValue1')}
            <br /> {t('timeValue2')}
          </p>
        </div>

        <div className={styles.companyInfo__contact}>
          <div className={styles.phones}>
            <img src={phone} alt='phone' />
            <p>
              +7 (727) 339 83 23 <br /> +7 (727) 339 83 23
            </p>
          </div>

          <nav className={styles.socials}>
            <a href='https://api.whatsapp.com/send?phone=77072289080' target='_blank' rel='noreferrer'>
              <img src={whatsapp} alt='whatsapp' />
            </a>
            <a href='' target='_blank'>
              <img src={telega} alt='telega' />
            </a>
            <a href='https://www.instagram.com/vsqazaqstan/?igshid=NDk5N2NlZjQ%3D' target='_blank' rel='noreferrer'>
              <img src={insta} alt='insta' />
            </a>
          </nav>
        </div>

        <div className={styles.lang}>
          <button className={styles.lang__ru} onClick={() => changeLanguage('ru')}>
            RU
          </button>
          <button className={styles.lang__en} onClick={() => changeLanguage('en')}>
            EN
          </button>
        </div>

        <div
          className={styles.mobileMenu}
          style={{ boxShadow: isActive ? 'none' : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
        >
          <div className={styles.mobileMenu__logoWrapper}>
            <div className={styles.mobileMenu__logo}>
              <a href='/'>
                <img src={logo} alt='logo' />
              </a>
            </div>
            <p className={styles.mobileMenu__heading}>{t('centerVisa')}</p>
          </div>
          <div className={styles.whatsappWrapper}>
            <a href='https://api.whatsapp.com/send?phone=77072289080' target='_blank' rel='noreferrer'>
              <img src={whatsapp} alt='whatsapp' />
            </a>
            <p>+7 (707) 901 2423</p>
          </div>
          <div
            className={`${styles.mobileMenu__burger} ${isActive ? styles.active : ''}`}
            onClick={() => toggleClass(!isActive)}
          >
            <span></span>
          </div>
        </div>
      </div>

      {isActive && <Burger />}
    </section>
  );
};

export default Header;
