import classNames from 'classnames'
import { nanoid } from 'nanoid'

import FAQItem from './FAQItem'
import { IFAQ } from './interface'

import styles from './styles.module.scss'

const FAQ = () => {
  const data: IFAQ[] = [
    {
      title: 'Мне нужно переживать за сохранность и конфиденциальность данных?',
      description: `Мы придерживаемся строгих мер безопасности и конфиденциальности. Все данные, предоставленные вами, будут обрабатываться с соблюдением политики безопасности и договора о неразглашении информации (NDA).`,
      fully: true,
    },
    {
      title: 'У нас есть идея проекта, что дальше?',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title: 'Какие условия оплаты вы предлагаете?',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title:
        'Какие технологии и языки программирования использует ваша компания?',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title: 'Сколько времени займет разработка?',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ]

  return (
    <section className={'container'}>
      <h3 className={styles.header}>FAQ</h3>
      <ul className={styles.faq_list}>
        {data.map((faq: IFAQ, index: number) => (
          <li key={nanoid()}>
            <FAQItem number={index + 1} {...faq} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQ
