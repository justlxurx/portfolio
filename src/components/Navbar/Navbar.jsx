import styles from './Navbar.module.scss';
import React, { useState } from 'react';
import logo from './../../assets/images/logo.png';
import uncover from './../../assets/images/uncover.svg';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  const SubMenu = ({ items }) => (
    <ul className={styles.submenu}>
      {items.map((item) => (
        <li key={nanoid()}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );

  const headerLinks = [
    {
      title: `${t('aboutUs')} `,
      path: '/',
    },
    {
      title: `${t('countries')} `,
      image: uncover,
      subMenu: [
        { title: `${t('schengen')}`, path: '/shengen' },
        { title: `${t('other')}`, path: '/others' },
      ],
    },
    {
      title: `${t('services')} `,
      image: uncover,
      subMenu: [
        { title: `${t('service.insurance.title')}`, path: '/services/insurance' },
        {
          title: `${t('service.translations.title')}`,
          path: '/services/translations',
        },
        { title: `${t('service.multipleVisas.title')}`, path: '/services/shengen-visas' },
        { title: `${t('service.apostille.title')}`, path: '/services/apostille' },
        {
          title: `${t('service.reservations.title')}`,
          path: '/services/hotel-flights',
        },
        {
          title: `${t('service.verification.title')}`,
          path: '/services/document-verification',
        },
      ],
    },

    {
      title: `${t('faq')} `,
      path: '/faq',
    },
    {
      title: `${t('comments')} `,
      path: '/feedback',
    },
    {
      title: `${t('contacts')} `,
      path: '/contact',
    },
  ];

  return (
    <header className={styles.menu}>
       <Link to='/'> 
         <div className={styles.logo}>
            <img src={logo} alt='logo' />
         </div>  
        </Link>
      <div></div>
      <div className={styles.menu__navigation}>
        <ul className={styles.menu__navigationList}>
          {headerLinks.map(({ path, title, image, subMenu }, index) => (
            <li key={index} className={styles.menu__navigationListItems} >
              <Link className={styles.links} to={path}>
                {title}
                {image && <img src={image} alt='g' className={styles.uncover} />}
              </Link>
              {subMenu && <SubMenu items={subMenu} />}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
