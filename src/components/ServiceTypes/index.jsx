import styles from './styles.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServiceTypes = ({ title, titleEn, text, img, id, textEn }) => {
  console.log(text);
  const [activeButton, setActiveButton] = useState(id);
  const { t, i18n } = useTranslation();

  const service = [
    {
      title: `${t('service.insurance.title')}`,
      path: '/services/insurance',
      service_class: styles.service__firstType,
    },
    {
      title: `${t('service.translations.title')}`,
      path: '/services/translations',
      service_class: styles.service__secondType,
    },
    {
      title: `${t('service.multipleVisas.title')}`,
      path: '/services/shengen-visas',
      service_class: styles.service__thirdType,
    },
    {
      title: `${t('service.reservations.title')}`,
      path: '/services/hotel-flights',
      service_class: styles.service__fourthType,
    },
    {
      title: `${t('service.verification.title')}`,
      path: '/services/document-verification',
      service_class: styles.service__fifthType,
    },
    {
      title: `${t('service.apostille.title')}`,
      path: '/services/apostille',
      service_class: styles.service__sixthType,
    },
  ];

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <section className={styles.service}>
      <div className={styles.service__heading}>
        <hr />
        <h1>{t('whatServices')}</h1>
        <hr />
      </div>
      <div className={styles.service__types}>
        {service.map(({ title, path, service_class }, index) => (
          <div className={service_class} key={index} onClick={() => handleButtonClick(index)}>
            <div
              className={styles.service__iconWrapper}
              style={{
                borderColor: activeButton === index ? '#D9D9D9' : '#EA4F0D',
              }}
            >
              <div className={styles.service__iconImg}></div>
            </div>

            <p>
              <Link to={path}>{title} </Link>
            </p>
          </div>
        ))}
      </div>

      <div className={styles.service__main}>
        <h3>{i18n.language === 'en' ? titleEn : title}</h3>
        <a href='/'>
          <button className={styles.requestButton}>Оставить заявку</button>
        </a>
        <img src={img} alt='service' />
        <div className={styles.service__content}>
          <h4>{i18n.language === 'en' ? titleEn : title}</h4>
          <p> {i18n.language === 'en' ? textEn : text}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;
