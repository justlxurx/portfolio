import Image from 'next/image'
import { nanoid } from 'nanoid'
import arrow_icon from 'public/arrow_icon.svg'
import confirmation from 'public/confirmation.svg'
import cases from 'public/fintech.png'
// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import { AnimationWrapper } from '../AnimationWrapper'

const Socials = () => {
  const socialLinks2 = [
    {
      icon: 'instagram.svg',
      path: 'https://instagram.com/qazdev.team?igshid=MzRlODBiNWFlZA==',
    },
    {
      icon: 'linkedin.svg',
      path: 'https://www.linkedin.com/in/qazdev-team-067a82205/ ',
    },
    {
      icon: 'telegram.svg',
      path: 'https://t.me/devcorn',
    },
    {
      icon: 'facebook.svg',
      path: 'https://www.facebook.com/qazdevelop.itcompany',
    },
  ]
  return (
    <div className={styles.social}>
      <a href="/portfolio">
        <button className={styles.cases_button_1}>
          <Image
            className={styles.cases_button__arrow1}
            src={arrow_icon}
            alt={'Arrow'}
          />
          все кейсы
        </button>
      </a>
      <nav className={styles.navigation1}>
        <ul className={styles.social_networks}>
          {socialLinks2.map(({ path, icon }) => (
            <li key={nanoid()}>
              <a className={styles.link} href={path} target="_blank">
                <Image src={icon} alt="icon" width="40" height="40" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
const Cases = () => {
  return (
    <section>
      <AnimationWrapper custom={2}>
        <h4 className={styles.short_info__header}>
          КЕЙСЫ,
          <br /> НА КОТОРЫХ РАСТЕШЬ
        </h4>
      </AnimationWrapper>
      <section className={styles.grow_cases}>
        <section className={styles.section1}>
          <article className={styles.short_article}>
            <div className={styles.person_info}>
              {/* <Image src={avatar} alt={'Avatar'}  /> */}
              <div className={styles.avatar1}></div>

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
              <Image
                src={confirmation}
                alt="confirmation"
                className={styles.confirmation1}
              />
            </div>
            <p className={styles.short_article__description}>
              Работая в мировых проектах и участвуя
              <br />в международном комьюнити, <br />
              разработчики непрерывно развивают <br /> свои hard skills и
              становятся <br />
              востребованными профессионалами
            </p>
          </article>

          {/* {!isMobile && <Socials />} */}

          <div className={styles.hidden_social1}>
            <Socials />
          </div>
        </section>

        <section className={styles.section2}>
          <Image src={cases} alt="cases" />
        </section>

        {/* {isMobile && <Socials />} */}

        <div className={styles.hidden_social2}>
          <Socials />
        </div>

        <section className={styles.section3}>
          <div className={styles.specialists}>
            <AnimationWrapper custom={3}>
              <p>
                {'<'}разработчики{'>'}
              </p>
            </AnimationWrapper>
            <AnimationWrapper custom={4}>
              <p>
                {'<'}тестировщики{'>'}
              </p>
            </AnimationWrapper>
            <AnimationWrapper custom={5}>
              <p>
                {'<'}проектные менеджеры{'>'}
              </p>
            </AnimationWrapper>
            <AnimationWrapper custom={6}>
              <p>
                {'<'}деливери-специалисты{'>'}
              </p>
            </AnimationWrapper>
          </div>
          <div
            className={styles.specialists}
            style={{
              paddingLeft: '14%',
              paddingRight: '14%',
              marginBottom: '0',
            }}
          >
            <AnimationWrapper custom={7}>
              <p>
                {'<'}бизнес-аналитики{'>'}
              </p>
            </AnimationWrapper>
            <AnimationWrapper custom={8}>
              <p>
                {'<'}девопс-специалисты{'>'}
              </p>
            </AnimationWrapper>
            <AnimationWrapper custom={9}>
              <p>
                {'<'}hr-менеджеры{'>'}
              </p>
            </AnimationWrapper>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Cases
