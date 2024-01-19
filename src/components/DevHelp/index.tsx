import classNames from 'classnames'
import styles from './styles.module.scss'
import Image from 'next/image'
import frame from '../../../public/frame.svg'

const DevHelp = () => {
  const support = [
    {
      title: 'Мы поможем вам разработать:',
      items: [
        {
          item: 'Сайт',
        },
        {
          item: 'Маркетплейсы',
        },
        {
          item: 'Платформы для онлайн курсов',
        },
        {
          item: 'Информационные порталы',
        },
        {
          item: 'Платежную систему',
        },
        {
          item: 'Финтех продукты',
        },
        {
          item: 'Приложения по управлению финансами',
        },
        {
          item: 'Платформы для фитнеса и здоровья',
        },
        {
          item: 'Приложения по доставке еды',
        },
        {
          item: 'СRM системы',
        },
        {
          item: 'Букинговая система для круизных лайнеров',
        },
        {
          item: 'Приложения для заказа такси',
        },
        {
          item: 'UX/UI дизайн ',
        },
      ],
    },
    {
      title: 'Разработаем дружелюбный интерфейс с нуля под ваши нужды:',
      items: [
        {
          item: 'Интеграция со сторонними сервисами',
        },
        {
          item: 'KYC/KYB',
        },
        {
          item: 'Оплата с карты',
        },
        {
          item: 'Интеграция с EGov через ЭЦП',
        },
        {
          item: 'Проекты любой сложности',
        },
      ],
    },
  ]

  return (
    <section className={classNames(styles.devHelp, 'container')}>
      {support.map(({ title, items }, index) => (
        <div key={index}>
          <h2 className={styles.devHelp__title}>{title}</h2>
          <div className={styles.devHelp__main}>
            {items.map(({ item }, index) => (
              <div key={index} className={styles.devHelp__mainBox}>
                <Image src={frame} alt="blue-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
export default DevHelp
