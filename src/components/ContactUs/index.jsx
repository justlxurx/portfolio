import Map from '../Map/index';
import styles from './styles.module.scss';
import icon_map from './../../assets/images/icon _map.png';
import icon_clock from './../../assets/images/icon_clock.svg';
import icon_mail from './../../assets/images/icon _mail.svg';
import icon_phone from './../../assets/images/icon _phone.png';
import whatsapp from './../../assets/images/whatsapp.png';
import telega from './../../assets/images/telega.png';
import insta from './../../assets/images/insta.png';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
  const phones = ['+7 (707) 901 24 23',
    '+7 (775) 076 19 19',
    '+7 (707) 341 06 99']
  return (
    <section className={`${styles.contacts} container`}>
      <div className={styles.contacts__heading}>
        <hr />
        <h1> {t('contacts')} </h1>
        <hr />
      </div>
      <div className={styles.contacts__data}>
        <div className={styles.contacts__firstColumn}>
          <div className={styles.address}>
            <img src={icon_map} alt='map' />
            <p>
              {t('addressValue1')} <br /> {t('addressValue2')}
            </p>
          </div>
          <div className={styles.time}>
            <img src={icon_clock} alt='clock' />
            <p>
              {t('timeValue1')} <br /> {t('timeValue2')}
            </p>
          </div>
        </div>
        <div className={styles.contacts__secondColumn}>
          <img src={icon_phone} alt='phone' />
          <ul className={styles.phoneWrapper}>
            {phones.map( (item, index )=> {
                 return (<li key={index}> 
                <a  className={styles.link} href={`tel:${item}`}>{item}</a></li>)
              })}</ul>
        </div>
        <div className={styles.contacts__thirdColumn}>
          <div className={styles.email}>
            <img src={icon_mail} alt='mail' />
            <a className={styles.link} href={`mailto:blsalmatyvisa@gmail.com`}>blsalmatyvisa@gmail.com</a>
          </div>
          <div className={styles.socials}>
            <a href='' target='_blank'>
              <img src={telega} alt='telega' />
            </a>
            <a href='https://www.instagram.com/vsqazaqstan/?igshid=NDk5N2NlZjQ%3D' target='_blank' rel='noreferrer'>
              <img src={insta} alt='insta' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=77072289080' target='_blank' rel='noreferrer'>
              <img src={whatsapp} alt='whatsapp' />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contacts__mobile}>
        <p className={styles.contacts__mobileText}>{t('stay')} </p>
        <div className={styles.socials}>
          <a href='' target='_blank'>
            <img src={telega} alt='telega' />
          </a>
          <a href='https://www.instagram.com/vsqazaqstan/?igshid=NDk5N2NlZjQ%3D' target='_blank' rel='noreferrer'>
            <img src={insta} alt='insta' />
          </a>
          <a href='https://api.whatsapp.com/send?phone=77072289080' target='_blank' rel='noreferrer'>
            <img src={whatsapp} alt='whatsapp' />
          </a>
        </div>
        <p className={styles.contacts__mobileText}>{t('findUs')}</p>
        <div className={styles.address}>
          <img src={icon_map} alt='map' />
          <p>Казахстан, г. Алматы, ул. Шевченко 146</p>
        </div>
      </div>
      <div className={styles.companyMap}>
        <Map />
      </div>
    </section>
  );
};

export default ContactUs;
