import Image from 'next/image'
import classNames from 'classnames'
import arrow_icon from 'public/arrow_icon.svg'
import avatar from 'public/avatar.svg'
import confirmation from 'public/confirmation.png'
import facebook from 'public/facebook.svg'
import group_of_phones from 'public/group_of_phones.png'
import instagram from 'public/instagram.svg'
import linkedin from 'public/linkedin.svg'
import logo from 'public/qazdev_logo.svg'
import telegram from 'public/telegram.svg'
import vector_line from 'public/vector_line.png'

// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const Cases = () => {
  return (
    <section style={{ paddingTop: '80px', marginBottom: '120px' }}>
      <h4 className={styles.short_info__header}>
        КЕЙСЫ,
        <br /> НА КОТОРЫХ РАСТЕШЬ
      </h4>
      <section className={styles.grow_cases}>
        <section className={styles.section1}>
          <article className={styles.short_article}>
            <div className={styles.person_info}>
              <Image src={avatar} alt={'Avatar'} />
              <div className={styles.person_name}>
                <h5>Оксана Герасименко</h5>
                <p>
                  Lead IT-recruiter компании
                  <strong>
                    {' '}
                    <em>qazdev</em>
                  </strong>{' '}
                </p>
              </div>
            </div>

            <p className={styles.short_article__description}>
              Работая в мировых проектах и участвуя
              <br />в международном комьюнити, <br />
              разработчики непрерывно развивают <br /> свои hard skills и
              становятся <br />
              востребованными профессионалами
            </p>
          </article>
          <div className={styles.social}>
            <button className={styles.cases_button_1}>
              <Image
                className={styles.cases_button__arrow1}
                src={arrow_icon}
                alt={'Arrow'}
              />
              все кейсы
            </button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                columnGap: '10px',
              }}
            >
              <Image
                className={styles.cases_social}
                src={instagram}
                alt={'instagram'}
              />
              <Image
                className={styles.cases_social_1}
                src={linkedin}
                alt={'linkedin'}
              />
              <Image
                className={styles.cases_social}
                src={telegram}
                alt={'telegram'}
              />
              <Image
                className={styles.cases_social_2}
                src={facebook}
                alt={'facebook'}
              />
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <Image src={group_of_phones} alt="group_of_phones" />
        </section>

        <section className={styles.section3}>
          <div
            className={styles.specialists}
            style={{ justifyContent: 'center' }}
          >
            <div>
              <p>
                {'<'}разработчики{'>'}
              </p>
            </div>
            <div>
              <p>
                {'<'}тестировщики{'>'}
              </p>
            </div>
            <div>
              <p>
                {'<'}проектные менеджеры{'>'}
              </p>
            </div>
            <div>
              <p>
                {'<'}деливери-специалисты{'>'}
              </p>
            </div>
          </div>

          <div
            className={styles.specialists}
            style={{ justifyContent: 'center' }}
          >
            <div>
              <p>
                {'<'}бизнес-аналитики{'>'}
              </p>
            </div>
            <div>
              <p>
                {'<'}девопс-специалисты{'>'}
              </p>
            </div>
            <div>
              <p>
                {'<'}hr-менеджеры{'>'}
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Cases
