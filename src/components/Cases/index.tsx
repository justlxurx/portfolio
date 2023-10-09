'use client'
import Image from 'next/image'
import { nanoid } from 'nanoid'
import arrow_icon from 'public/arrow_icon.svg'
import confirmation from 'public/confirmation.svg'
import cases from 'public/cases.png'
import { motion } from 'framer-motion'
import { useRef } from 'react'
// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

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
const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5, ease: 'easeOut' },
  }),
}
const Cases = () => {
  // const isMobile = useMedia('(max-width: 768px)')
  const scrollRef = useRef(null)
  return (
    <motion.section initial="hidden" whileInView="visible">
      <motion.h4
        variants={textAnimation}
        custom={2}
        className={styles.short_info__header}
      >
        КЕЙСЫ,
        <br /> НА КОТОРЫХ РАСТЕШЬ
      </motion.h4>
      <section className={styles.grow_cases}>
        <section className={styles.section1}>
          <motion.article
            variants={textAnimation}
            custom={3}
            className={styles.short_article}
          >
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
          </motion.article>
          {/* {!isMobile && <Socials />} */}
          <motion.div
            variants={textAnimation}
            custom={4}
            className={styles.hidden_social1}
          >
            <Socials />
          </motion.div>
        </section>

        <motion.section
          variants={textAnimation}
          custom={5}
          className={styles.section2}
        >
          <Image src={cases} alt="cases" />
        </motion.section>
        {/* {isMobile && <Socials />} */}
        <motion.div
          variants={textAnimation}
          custom={6}
          className={styles.hidden_social2}
        >
          <Socials />
        </motion.div>

        <section className={styles.section3}>
          <div className={styles.specialists}>
            <motion.div variants={textAnimation} custom={6}>
              <p>
                {'<'}разработчики{'>'}
              </p>
            </motion.div>
            <motion.div variants={textAnimation} custom={7}>
              <p>
                {'<'}тестировщики{'>'}
              </p>
            </motion.div>
            <motion.div variants={textAnimation} custom={7}>
              <p>
                {'<'}проектные менеджеры{'>'}
              </p>
            </motion.div>
            <motion.div variants={textAnimation} custom={8}>
              <p>
                {'<'}деливери-специалисты{'>'}
              </p>
            </motion.div>
          </div>
          <div
            className={styles.specialists}
            style={{
              paddingLeft: '14%',
              paddingRight: '14%',
              marginBottom: '0',
            }}
          >
            <motion.div variants={textAnimation} custom={9}>
              <p>
                {'<'}бизнес-аналитики{'>'}
              </p>
            </motion.div>
            <motion.div variants={textAnimation} custom={10}>
              <p>
                {'<'}девопс-специалисты{'>'}
              </p>
            </motion.div>
            <motion.div variants={textAnimation} custom={11}>
              <p>
                {'<'}hr-менеджеры{'>'}
              </p>
            </motion.div>
          </div>
        </section>
      </section>
    </motion.section>
  )
}

export default Cases
