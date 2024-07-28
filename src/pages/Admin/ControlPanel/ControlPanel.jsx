import styles from "./ControlPanel.module.scss";
import customer from "../../../assets/images/customer.svg";
import dashboard from "../../../assets/images/dashboard.svg";
import { Link } from "react-router-dom";

export const ControlPanel = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main__heading}>Control Panel</div>
      <div className={styles.main__list}>
        {/* <p className={styles.text}>administration</p> */}
        <ul className={styles.list}>
          <li>
            <img src={customer} alt="customer" />
            <Link to="clients" className={styles.link}>
              {" "}
              Clients
            </Link>
          </li>
          {/* <li>
            <img src={dashboard} alt='dashboard' />
             <Link to='other'  className={styles.link}>Other country </Link>
          </li><li>
            <img src={dashboard} alt='dashboard' />
             <Link to='shengen'  className={styles.link}>Shengen country</Link>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
