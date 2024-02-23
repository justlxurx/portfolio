'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '../ui/Button'

import arrow_icon from 'public/arrow_icon.svg'

const Booking = () => {
  const router = useRouter()

  return (
    <section className={styles.booking}>
      <div className={styles.booking__title}>
        <p>Букинговая система для круизных лайнеров</p>
        <p className={styles.booking__titleNum}>015</p>
      </div>

      <div className={styles.booking__content}>
        <div className={styles.hiddenBlock}>
          <p className={styles.hiddenBlock__text}>
            Команда{' '}
            <strong>
              <em>qazdev </em>
            </strong>{' '}
            участвовала в разработке букинговой системы для круизных лайнеров
          </p>
          <div className={styles.hiddenBlock__content}>
            <p className={styles.hiddenBlock__contentNum}>015</p>
            <div className={styles.hiddenBlock__contentImg}></div>
          </div>
        </div>
        <div className={styles.booking__img}></div>
        <div className={styles.booking__text}>
          <p>
            Команда{' '}
            <strong>
              <em>qazdev </em>
            </strong>{' '}
            участвовала в разработке букинговой системы для круизных лайнеров
            <br />
            <br />
            <br />
          </p>
          <p>
            Заказчику необходимо было обновление системы, которая управляет
            всеми бизнес-процессами на суднах: от бронирования кают и
            конференц-залов до работы автомобильных палуб и ресторанов <br />{' '}
            <br />
          </p>
          <p>
            {'<1>'} Мы сделали декомпозицию монолитной системы на более мелкие,
            доработали их <br />
            <br />
            {'<2>'} Разработали новый функционал, который поддерживает работу
            систем судов, судовых сооружений, управляет всеми бизнес-процессами
            на круизных суднах, даже ценообразованием, бухгалтерским учетом и
            взаимодействием с клиентами
          </p>
        </div>
        <div></div>
      </div>
      <Button
        className={styles.backButton}
        onClick={() => router.back()}
        type="button"
      >
        <Image
          className={styles.backButton__arrow}
          src={arrow_icon}
          alt={'Arrow'}
        />
        вернуться назад
      </Button>
    </section>
  )
}

export default Booking
