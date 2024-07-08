import { React } from 'react';
import styles from './styles.module.scss';
import whatsapp1 from './../../assets/images/whatsapp1.png';
import telega from './../../assets/images/telega.png';
import insta from './../../assets/images/instagram.png';
import logo from './../../assets/images/logo.png';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const mainLinks = [
    {
      title: `${t('aboutUs')}`,
      path: '/',
    },
    {
      title: `${t('countries')}`,
      path: '/shengen',
    },
    {
      title: `${t('services')}`,
      path: '/services/insurance',
    },
    {
      title: `${t('faq')}`,
      path: '/faq',
    },
  ];
  return (
    <footer className={styles.footerWrapper}>
      <img src={logo} alt='logo' className={styles.footerWrapper__logo} />
      <h5 className={styles.footerWrapper__mainHeading}>{t('firstCenter')}</h5>
      <div className={styles.footerWrapper__column1}>
        <h3 className={styles.footerWrapper__heading}>{t('aboutCompany')}</h3>
        <ul className={styles.footerWrapper__menu}>
          {mainLinks.map(({ path, title }) => (
            <a className={styles.footerWrapper__menuItemsLinks} href={path} key={nanoid()}>
              <li className={styles.footerWrapper__menuItems}>{title}</li>
            </a>
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
            <p>
              +7 (727) 339 83 23 <br />
              +7 (727) 917 85 00
            </p>
          </div>
          <div className={styles.contacts__wrapper}>
            <p className={styles.contacts__wrapperPara}>Email:</p>
            <p> blsvisalmaty@gmail.com</p>
          </div>
        </div>
        <div className={styles.socialNetworks}>
          <a href='' target='_blank'>
            <img src={telega} alt='telega' />
          </a>
          <a href='https://api.whatsapp.com/send?phone=77072289080' target='_blank' rel='noreferrer'>
            <img src={whatsapp1} alt='whatsapp' />
          </a>
          <a href='https://www.instagram.com/vsqazaqstan/?igshid=NDk5N2NlZjQ%3D' target='_blank' rel='noreferrer'>
            <img src={insta} alt='insta' />
          </a>
        </div>
        <div className={styles.footerWrapper__bottomText}>
          <p>{t('centerVisa')} - BLS Visa Almaty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
