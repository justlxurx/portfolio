import styles from './ControlPanel.module.scss';
import customer from '../../../assets/images/customer.svg';

export const ControlPanel = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main__heading}>Control Panel</div>
      <div className={styles.main__list}>
        <p className={styles.text}>administration</p>
        <ul className={styles.list}>
          <li>
            <img src={customer} alt='customer' />
            Clients
          </li>
        </ul>
      </div>
    </section>
  );
};
