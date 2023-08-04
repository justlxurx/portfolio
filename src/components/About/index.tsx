import Image from 'next/image'
import classNames from 'classnames'
import box from 'public/about_box_image.svg'
import core from 'public/about_core_image.svg'
import java from 'public/about_java_image.svg'
import php from 'public/about_php_image.svg'
import planet from 'public/about_planet_image.svg'
import react from 'public/about_react_image.svg'
import sSymbol from 'public/about_s_image.svg'
import tSymbol from 'public/about_t_image.svg'
import logo from 'public/qazdev_logo.svg'

import FeedbackButton from '@/components/ui/FeedbackButton'

import styles from './styles.module.scss'

const ShortInfo = () => {
  return (
    <div className={styles.short_info}>
      <h4 className={styles.short_info__header}>О нас</h4>
      <p className={styles.short_info__description}>
        <strong>
          <em>qazdev</em>
        </strong>{' '}
        — аутсорсинговая IT-компания из Казахстана. Разрабатываем, поддерживаем
        и внедряем программное обеспечение для проектов из Америки, Европы и
        СНГ.
        <br />
        <br />
        Реализуем локальные и масштабные задачи в действующих и новых проектах,
        применяя современный технологический стек.
      </p>
    </div>
  )
}

const About = () => {
  interface IProgrammingLanguage {
    icon: string
    alt: string
  }

  const programmingLanguages: IProgrammingLanguage[] = [
    {
      icon: java,
      alt: 'Java',
    },
    {
      icon: react,
      alt: 'React',
    },
    {
      icon: php,
      alt: 'PHP',
    },
  ]

  return (
    <section className={styles.about}>
      <div className={'container'}>
        <header className={styles.about__head}>
          <div className={styles.about__logo_wrapper}>
            <Image
              className={styles.about__logo}
              src={logo}
              alt={'Логотип'}
              fill
            />
          </div>
          <h2 className={styles.about__subheader}>
            Понимаем код <br />и людей в равной мере
          </h2>
        </header>
      </div>
      <div className={styles.info}>
        <div
          className={classNames(styles.info__first_column, styles.first_column)}
        ></div>
        <div
          className={classNames(
            styles.info__second_column,
            styles.second_column,
          )}
        >
          <div className={styles.second_column__main}>
            <div className={styles.second_column__box_wrapper}>
              <Image src={box} fill quality={100} alt={'Box'} />
            </div>
            <div className={styles.second_column__core_wrapper}>
              <Image src={core} fill alt={'Core'} />
            </div>
          </div>
          <div className={styles.second_column__grid} />
          <div className={styles.second_column__footer} />
        </div>
        <div
          className={classNames(styles.info__third_column, styles.third_column)}
        >
          <h4 className={styles.third_column__header}>
            Технологическое слияние
          </h4>
          <div className={styles.third_column__planet}>
            <Image src={planet} fill alt={'Planet'} />
          </div>
        </div>
        <div
          className={classNames(
            styles.info__fourth_column,
            styles.fourth_column,
          )}
        >
          <div className={styles.fourth_column__symbols}>
            <div className={styles.fourth_column__s_symbol}>
              <Image src={sSymbol} fill alt={'S'} quality={100} />
            </div>

            <div className={styles.fourth_column__t_symbol}>
              <Image src={tSymbol} fill alt={'T'} quality={100} />
            </div>
          </div>
          <div className={styles.fourth_column__short_info}>
            <ShortInfo />
          </div>
        </div>
        <div
          className={classNames(styles.info__fives_column, styles.fives_column)}
        >
          <ul className={styles.fives_column__languages}>
            {programmingLanguages.map(({ icon, alt }: IProgrammingLanguage) => (
              <li key={alt}>
                <div className={styles.fives_column__language}>
                  <Image src={icon} fill alt={alt} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.mobile_info}>
        <header className={styles.mobile_info__head}>
          <h2 className={styles.mobile_info__subheader}>
            Понимаем код <br />и людей в равной мере
          </h2>
          <div className={styles.mobile_info__head_inner}>
            <div>
              <FeedbackButton />
            </div>
            <ul className={styles.mobile_info__languages}>
              {programmingLanguages.map(
                ({ icon, alt }: IProgrammingLanguage) => (
                  <li key={alt}>
                    <div className={styles.mobile_info__language}>
                      <Image src={icon} fill alt={alt} />
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </header>
        <div className={styles.mobile_info__short_info}>
          <ShortInfo />
        </div>
      </div>
    </section>
  )
}

export default About
