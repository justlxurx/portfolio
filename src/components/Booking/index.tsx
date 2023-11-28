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
        <p className={styles.project_num}>006</p>
      </div>

      <div className={styles.booking__content}>
        <div className={styles.hidden_block}>
          <p className={styles.hidden_block_text}>
            Команда
            <strong>
              <em> qazdev </em>
            </strong>
            настроила работу сервиса для создания соглашений, договоров,
            контрактов, претензионных документов
          </p>
          <div className={styles.hidden_block_content}>
            <p className={styles.hidden_block_content_num}>006</p>
            <div className={styles.hidden_block_content_img}></div>
          </div>
        </div>
        <div className={styles.booking_img}></div>
        <div className={styles.booking_text}>
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
            конференц-залов до работы автомобильных палуб и ресторанов <br />
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
        className={styles.cases_button_1}
        onClick={() => router.back()}
        type="button"
      >
        <Image
          className={styles.cases_button__arrow1}
          src={arrow_icon}
          alt={'Arrow'}
        />
        вернуться назад
      </Button>
    </section>
  )
}

export default Booking
