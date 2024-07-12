import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import marker from "./../../assets/images/burger-marker.png";
import clock from "./../../assets/images/burger-clock.png";
import phone from "./../../assets/images/burger-phone.png";
import styles from "./styles.module.scss";
import { headerLinks } from "./links.data";
import { useState } from "react";

const BurgerMenu = () => {
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
          <p>Казахстан, г. Алматы, Маркова 22/37, 4 этаж, офис 6</p>
        </div>
        <div className={styles.burger__info}>
          <img src={phone} alt="phone" width={20} />
          <ul className={styles.burger__list}>
            {phones.map( (item, index )=> {
                 return (<li key={index}> 
                <a  className={styles.contacts__link} href={`tel:${item}`}>{item}</a></li>)
              })}</ul>
        </div>
        <div className={styles.burger__info}>
          <img src={clock} alt="clock" width={20}/>
          <div>
            <p>пн-пт 10:00 - 18:00 сб 10.00-13.00 </p>
            <p>вс выходной</p>
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
