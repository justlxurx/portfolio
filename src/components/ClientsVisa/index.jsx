import { React } from 'react';
import styles from './styles.module.scss';
import visa1 from './../../assets/images/visa1.jpeg';
import visa2 from './../../assets/images/visa2.jpeg';
import visa3 from './../../assets/images/visa3.jpeg';
import visa4 from './../../assets/images/visa4.jpeg';
import BigSlider from './BigSlider';
import { useTranslation } from 'react-i18next';

const Visas = () => {
  const { t } = useTranslation();
  const visaImages = [visa1, visa2, visa3, visa4];

  return (
    <section className={styles.clientsVisas}>
      <div className={styles.clientsVisas__heading}>
        <hr />
        <h1>{t('visas')}</h1>
        <hr />
      </div>
      <div className={styles.slider}>
        <BigSlider items={visaImages} />
      </div>
    </section>
  );
};

export default Visas;
