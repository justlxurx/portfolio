import styles from './styles.module.scss'
const Popup = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.popup}>{children}</section>
}

export default Popup
