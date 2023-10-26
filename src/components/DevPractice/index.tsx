'use client'
// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import { AnimationWrapper } from '../AnimationWrapper'
import { BlockWrapper } from '../BlockWrapper'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['devanagari'], weight: ['700'] })

const DevPractice = () => {
  return (
    <section className={styles.dev}>
      <div className={styles.dev_section1}>
        <div className={styles.dev_section1_text}>
          <AnimationWrapper custom={6}>
            <h1 className={poppins.className}>
              Dev <br /> Practice
            </h1>
          </AnimationWrapper>

          <p>идет набор на новый поток_ </p>
        </div>
        <BlockWrapper custom={8}>
          <div className={styles.new_flow}>
            <div className={styles.new_flow_1}>
              <div className={styles.new_flow_1_a}></div>
              <div></div>
            </div>

            <div className={styles.new_flow_2}>
              <div className={styles.new_flow_2_a}></div>
              <div></div>
            </div>

            <div className={styles.new_flow_3}>
              <div className={styles.new_flow_3_a}></div>
              <div></div>
            </div>

            <div className={styles.new_flow_4}>
              <div className={styles.new_flow_4_a}></div>
              <div></div>
            </div>

            <div className={styles.new_flow_5}>
              <div className={styles.new_flow_5_a}></div>
              <div></div>
            </div>
          </div>
        </BlockWrapper>
      </div>
      <div className={styles.dev_section2}>
        <div className={styles.dev_section2_p}>
          <p>
            <b>Выращиваем коллег</b>
          </p>
        </div>
        <div className={styles.dev_section2_text}>
          <BlockWrapper custom={9}>
            <p className={styles.dev_section2_text_1}>
              Обучение на практике <br />
              под руководством опытных <br /> разработчиков{' '}
              <strong>
                <em>qazdev</em>
              </strong>
            </p>{' '}
          </BlockWrapper>
          <BlockWrapper custom={10}>
            <p className={styles.dev_section2_text_2}>
              {'<'}Java Spring Framework{'>'}
            </p>
          </BlockWrapper>
          <div className={styles.click}>
            <a href="#form">
              {' '}
              <button className={styles.click_plus}>+</button>
            </a>
            <div className={styles.click_text}>
              <b>
                <p>ЗАПИСАТЬСЯ</p>
              </b>
              <p style={{ color: 'rgba(0, 0, 0, 0.50)' }}>УЧИСЬ У НАС</p>
            </div>
          </div>
        </div>
        <AnimationWrapper custom={8}>
          <div className={styles.dev_section2_frame}>
            <div className={styles.dev_section2_frame_1}>
              <div className={styles.row1}>
                <div className={styles.column1}></div>
                <div className={styles.column2}></div>
              </div>
              <div className={styles.row2}></div>
            </div>
            <div className={styles.dev_section2_frame_2}></div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}

export default DevPractice
