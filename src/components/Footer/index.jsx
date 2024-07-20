import { React } from 'react';
import styles from './styles.module.scss';
import whatsapp1 from './../../assets/images/whatsapp1.png';
import telega from './../../assets/images/telega.png';
import insta from './../../assets/images/instagram.png';
import logo from './../../assets/images/logo.png';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation();
  const mainLinks = [
    {
      title: `${t('aboutUs')}`,
      path: '/',
    },
    {
      title: `${t('comments')}`,
      path: '/feedback',
    },
    {
      title: `${t('services')}`,
      path: '/services/insurance',
    },
    {
      title: `${t('faq')}`,
      path: '/faq',
    },
    {
      title: `${t('contacts')}`,
      path: '/contact',
    },
  ];
    const phones = ['+7 (707) 901 24 23',
      '+7 (775) 076 19 19',
      '+7 (707) 341 06 99']
  return (
    <div className={styles.background}>
    <footer className={`${styles.footerWrapper} container`}>
      <Link to='/'><img src={logo} alt='logo' className={styles.footerWrapper__logo} />
       </Link>
       <h5 className={styles.footerWrapper__mainHeading}>{t('firstCenter')}</h5>
      <div className={styles.footerWrapper__column1}>
        <h3 className={styles.footerWrapper__heading}>{t('aboutCompany')}</h3>
        <ul className={styles.footerWrapper__menu}>
          {mainLinks.map(({ path, title }) => (
            <Link className={styles.footerWrapper__menuItemsLinks} to={path} key={nanoid()}>
              <li className={styles.footerWrapper__menuItems}>{title}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className={styles.footerWrapper__column2}>
        <h3 className={styles.footerWrapper__heading}>{t('contacts')}</h3>
        <div className={styles.contacts}>
          <div className={styles.contacts__wrapper}>
            <p className={styles.contacts__wrapperPara}>{t('address')}</p>
            <p> {t('addressValue')}</p>
          </div>
          <div className={styles.contacts__wrapper}>
            <p className={styles.contacts__wrapperPara}>{t('phone')}</p>
            <ul className={styles.contacts__list}>
            {phones.map( (item, index )=> {
                 return (<li key={index}> 
                <a  className={styles.contacts__link} href={`tel:${item}`}>{item}</a></li>)
              })}</ul>
          </div>
          <div className={styles.contacts__wrapper}>
            <p className={styles.contacts__wrapperPara}>Email:</p>
            <a className={styles.link} href={`mailto:blsalmatyvisa@gmail.com`}>blsalmatyvisa@gmail.com</a>
      
          </div>
        </div>
        <div className={styles.socialNetworks}>
          <a href='' target='_blank'>
            <img src={telega} alt='telega' />
          </a>
          <a href='https://api.whatsapp.com/send?phone=77072289080' target='_blank' rel='noreferrer'>
            <img src={whatsapp1} alt='whatsapp' />
          </a>
          <a href='https://www.instagram.com/blsvizakz?igsh=ZzNla2dib3hjeGdl' target='_blank' rel='noreferrer'>
            <img src={insta} alt='insta' />
          </a>
        </div>
        <div className={styles.footerWrapper__bottomText}>
          <p>{t('centerVisa')} - BLS Visa Almaty</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
