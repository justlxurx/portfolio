import { React } from 'react';
import styles from './styles.module.scss';
import visa1 from './../../assets/images/visa1.jpeg';
import visa2 from './../../assets/images/visa2.jpeg';
import visa3 from './../../assets/images/visa3.jpeg';
import visa4 from './../../assets/images/visa4.jpeg';
import visa5 from './../../assets/images/visa5.jpeg';
import visa6 from './../../assets/images/visa6.jpeg';
import visa7 from './../../assets/images/visa7.jpeg';
import visa8 from './../../assets/images/visa8.jpeg';
import visa9 from './../../assets/images/visa9.jpeg';
import visa11 from './../../assets/images/visa11.jpeg';
import visa12 from './../../assets/images/visa12.jpeg';
import visa13 from './../../assets/images/visa13.jpeg';
import BigSlider from './BigSlider';
import { useTranslation } from 'react-i18next';

const Visas = () => {
  const { t } = useTranslation();
  const visaImages = [visa1, visa2, visa3, visa4, visa5, visa6, visa7, visa8, visa9, visa11, visa12, visa13];

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
