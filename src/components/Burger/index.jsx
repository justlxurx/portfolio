import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import marker from "./../../assets/images/burger-marker.png";
import clock from "./../../assets/images/burger-clock.png";
import phone from "./../../assets/images/burger-phone.png";
import styles from "./styles.module.scss";
import { headerLinks } from "./links.data";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const {t} = useTranslation()
  const phones = [
    '+7 (727) 339 83 23',
    '+7 (707) 908 08 29',
    '+7 (708) 808 93 03',
    '+7 (707) 055 67 27',
    '+7 (707) 228 90 80']
  const SubMenu = ({ items }) => (
    <ul className={styles.burgerSubmenu}>
      {items.map((item) => (
        <li key={nanoid()}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
  return (
    <section className={styles.burger}>
      <div className={styles.burger__infoWrapper}>
        <div className={styles.burger__info}>
          <img src={marker} alt="marker"  width={20}/>
          <p>
            {t('addressValue1')} <br /> {t('addressValue2')}
          </p>
        </div>
        <div className={styles.burger__info}>
          <img src={phone} alt="phone" width={20} />
          <ul className={styles.burger__list}>
            {phones.map( (item, index )=> {
                 return (<li key={index} className={styles.burger__listItem}> 
                <a  className={styles.contacts} href={`tel:${item}`}>{item}</a></li>)
              })}</ul>
        </div>
        <div className={styles.burger__info}>
          <img src={clock} alt="clock" width={20}/>
          <div>
          <p>
            {t('timeValue1')}
            <br /> {t('timeValue2')}
          </p>
          </div>
        </div>
      </div>

      <ul className={styles.burger__navigationList} >
        {headerLinks.map(({ path, title, image, subMenu }) => (
          <li key={nanoid()} className={styles.burger__navigationListItems} >
            <Link className={styles.links} to={path}>
              {title}
              {image && <img src={image} alt="g" className={styles.uncover} />}
            </Link>
            {subMenu && <SubMenu  items={subMenu} />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BurgerMenu;
