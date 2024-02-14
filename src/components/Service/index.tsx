import classNames from 'classnames'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles.module.scss'
import complex from './../../../public/complex-symbol.png'

const inter = Inter({ subsets: ['latin'], weight: ['700'] })

const Service = () => {
  const service = [
    {
      title1: 'веб разработка',
      title2: 'От Идеи к Реальности',
      text: 'Мы специализируемся на создании веб-платформ, способных превратить ваши идеи в эффективные инструменты для вашего бизнеса. Независимо от сложности проекта, мы стремимся превратить концепцию в реальность, предоставляя индивидуальные решения, нацеленные на удовлетворение потребностей вашего бизнеса.',
      bottomText:
        'Наши веб-разработчики изучают вашу компанию, чтобы создать платформу, которая не только отражает вашу уникальность, но и предоставляет интуитивно понятный пользовательский опыт. Мы работаем над тем, чтобы ваше онлайн-присутствие было не только потрясающим, но и идеально соответствовало вашим бизнес-потребностям. Ваш цифровой след начинается здесь, с нами.',
      items: [
        {
          item: 'Фронтенд',
        },
        {
          item: 'Бэкенд',
        },
        {
          item: 'Интеграция API',
        },
        {
          item: 'Электронная коммерция',
        },
        {
          item: 'Оптимизация',
        },
        // {
        //   item: 'Prototyping',
        // },
        // {
        //   item: 'Slide Deck Presentation',
        // },
      ],
    },
    {
      title1: 'мобильная разработка',
      title2: 'Инновации в Движении',
      text: 'Мобильные приложения - ключевой элемент современного бизнеса. Мы создаем мобильные решения, которые не только соответствуют вашим целям, но и просты в использовании. Наша цель - не просто разработать приложение, но и создать удивительный пользовательский опыт. От ваших мыслей до экрана вашего устройства - мы воплощаем ваши идеи в мобильную реальность.',
      items: [
        {
          item: 'iOS',
        },
        {
          item: 'Android',
        },
        {
          item: 'Кроссплатформенность',
        },
        {
          item: 'Игры',
        },
        {
          item: 'Мобильный дизайн',
        },
        {
          item: 'Аналитика',
        },
      ],
    },
    {
      title1: 'UX/UI Design',
      title2: 'Интуитивное Взаимодействие',
      text: `Красивый дизайн должен быть не только привлекательным, 
но и простым для понимания. Наш подход к UX/UI дизайну основан на уникальности вашего бренда и легкости использования для пользователя. Мы стремимся создать не просто интерфейс, 
а интуитивно понятное взаимодействие между пользователем 
и вашим продуктом. Дизайн, который говорит сам за себя.`,
      items: [
        {
          item: 'UX/UI Design',
        },
        {
          item: 'Product Design',
        },
        {
          item: 'Web Design',
        },
        {
          item: 'App Design',
        },
        {
          item: 'Design System',
        },
        {
          item: 'Prototyping',
        },
        {
          item: 'Slide Deck Presentation',
        },
      ],
    },
    {
      title1: 'IT поддержка',
      title2: 'Надежное Сопровождение Вашего IT продукта',
      text: 'В мире быстрой цифровизации, ваш бизнес нуждается в надежной поддержке. Мы предлагаем несложные и эффективные IT-решения для вашей компании. Наша поддержка - это не просто реакция на проблемы, но и постоянное обслуживание, чтобы ваша IT-инфраструктура работала бесперебойно. Мы заботимся о вашем успехе.',
      items: [
        {
          item: 'Техподдержка',
        },
        {
          item: 'Администрирование',
        },
        {
          item: 'Резервное копирование',
        },
        {
          item: 'Настройка ПО',
        },
        {
          item: 'Безопасность',
        },
        {
          item: 'Мониторинг',
        },
      ],
    },
  ]

  return (
    <section className={classNames(styles.service, 'container')}>
      <h2 className={styles.service__heading}>Наши услуги</h2>
      <div className={styles.service__wrapper}>
        {service.map(({ title1, title2, bottomText, text, items }, index) => (
          <div key={index} className={styles.service__box}>
            <div className={styles.service__boxTop}>
              <div className={styles.service__boxTopHeadingWrapper}>
                <div className={styles.service__boxTopSymbol}>
                  <Image src={complex} alt="symbol" />
                </div>
                <h4 className={styles.service__boxTopHeading}>{title1}</h4>
              </div>
              <div>
                <h3
                  className={classNames(
                    styles.service__boxTitle,
                    inter.className,
                  )}
                >
                  {title2}
                </h3>
                <p className={styles.service__boxText}>{text}</p>
                <p className={styles.service__boxTextBottom}>{bottomText}</p>
              </div>
            </div>
            <div className={styles.service__boxBottom}>
              <div className={styles.service__boxBottomItemsWrapper}>
                {items.map(({ item }, index) => (
                  <div className={styles.service__boxBottomItems} key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service
