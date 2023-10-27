import styles from './styles.module.scss'
import Image from 'next/image'
const Popup = ({
  children,
  src,
  color,
  backgroundColor,
}: {
  children: React.ReactNode
  src: any
  color: any
  backgroundColor: any
}) => {
  return (
    <section
      className={styles.popup}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {children}
      <Image src={src} alt="smile" className={styles.smile_popup} />
      <p style={{ color: `${color}` }}>Данные успешно отправлены</p>
    </section>
  )
}

export default Popup
