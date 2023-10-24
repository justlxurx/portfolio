import Image from 'next/image'
import quadratic from 'public/quadratic.svg'
//import visual from 'public/visual.jpg'
import visual from 'public/visual.svg'
import FeedbackButton1 from '@/components/ui/FeedbackButton1'
import styles from './styles.module.scss'
import { AnimationWrapper } from '../AnimationWrapper'
const Career = () => {
  return (
    <AnimationWrapper custom={5}>
      <section className={styles.career_main}>
        <div className={styles.values}></div>

        <div className={styles.in_it}>
          <div className={styles.first_row}>
            <div className={styles.first_row_first_column}>
              <div className={styles.first_row_first_column_1}>
                <div className={styles.borders}>
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'start' }}
                  />
                </div>
                <div className={styles.borders}></div>
                <div></div>
              </div>
              <div className={styles.first_row_first_column_2}>
                <div className={styles.borders}>
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'center' }}
                  />
                </div>
                <div className={styles.borders}></div>
                <div></div>
              </div>
              <div className={styles.first_row_first_column_3}>
                <div className={styles.for_line}>
                  <AnimationWrapper custom={6}>
                    Мы не нанимаем сотрудников, <br /> мы расширяем команду
                  </AnimationWrapper>
                </div>
                <div className={styles.quad2}>
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'start' }}
                  />
                </div>
              </div>

              <div className={styles.feedback}>
                <div className={styles.for_line1}>
                  <FeedbackButton1 />
                </div>
                <div className={styles.quad2}>
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'end' }}
                  />
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'center' }}
                  />
                </div>
              </div>

              <div className={styles.first_row_first_column_4}>
                <div
                  className={styles.borders}
                  style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}
                >
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'end' }}
                  />
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'end' }}
                  />
                </div>
                <div
                  className={styles.borders}
                  style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}
                >
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'end', justifySelf: 'center' }}
                  />
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ alignSelf: 'end', justifySelf: 'center' }}
                  />
                </div>
                <div></div>
              </div>
            </div>
            <div className={styles.first_row_second_column}>
              <div className={styles.first_row_second_column_1}>
                <Image
                  src={quadratic}
                  alt="quadratic"
                  style={{ justifySelf: 'end' }}
                />
                <div></div>
                <Image
                  src={quadratic}
                  alt="quadratic"
                  style={{ justifySelf: 'start' }}
                />
              </div>
              <div className={styles.first_row_second_column_2}>
                <Image
                  src={quadratic}
                  alt="quadratic"
                  style={{ justifySelf: 'end', alignSelf: 'center' }}
                />
                <div></div>
                <Image
                  src={quadratic}
                  alt="quadratic"
                  style={{ justifySelf: 'start', alignSelf: 'center' }}
                />
              </div>
              <div className={styles.first_row_second_column_3}>
                <div className={styles.for_grid}>
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ justifySelf: 'end', alignSelf: 'end' }}
                  />
                  <div></div>
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ justifySelf: 'start', alignSelf: 'end' }}
                  />
                </div>
              </div>
              <div
                className={styles.first_row_second_column_4}
                style={{ borderBottom: 'none' }}
              >
                <div
                  style={{
                    alignSelf: 'end',
                    display: 'grid',
                    gridTemplateColumns: '2fr 0.2fr 4.5fr',
                  }}
                >
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ justifySelf: 'end' }}
                  />
                  <div></div>
                  <Image src={quadratic} alt="quadratic" />
                </div>
                <div
                  style={{
                    alignSelf: 'end',
                    display: 'grid',
                    gridTemplateColumns: '2fr 0.2fr 4.5fr',
                  }}
                >
                  <Image
                    src={quadratic}
                    alt="quadratic"
                    style={{ justifySelf: 'end' }}
                  />
                  <div></div>
                  <Image src={quadratic} alt="quadratic" />
                </div>
              </div>
            </div>

            <div className={styles.first_row_third_column}>
              <Image src={visual} alt="visual1" width="500" height="500" />
            </div>
            <div className={styles.first_row_fourth_column}></div>
            <div
              className={styles.first_row_five_column}
              style={{
                display: 'grid',
                gridTemplateRows: '2fr 1fr 1.8fr 0.7fr',
              }}
            >
              <Image src={quadratic} alt="quadratic" />
              <Image src={quadratic} alt="quadratic" />
              <Image src={quadratic} alt="quadratic" />
              <Image src={quadratic} alt="quadratic" />
              <Image src={quadratic} alt="quadratic" />
            </div>
            <div className={styles.first_row_six_column}></div>
          </div>

          <div className={styles.second_row}>
            <div>
              <AnimationWrapper custom={7}>КАРЬЕРА В IT</AnimationWrapper>
            </div>
          </div>

          <div className={styles.third_row}>
            <div className={styles.small_text} id={styles.word1}>
              <p>наши ценности</p>{' '}
            </div>
            <div className={styles.main_text}>
              <AnimationWrapper custom={8}>
                <p>
                  <strong>
                    <em>qazdev</em> <br />
                  </strong>
                  – аутсорсинговая <br /> компания про: <br />
                  {'<'}готовность к росту{'>'} 
                </p>
              </AnimationWrapper>
            </div>
            <div
              className={styles.small_text}
              id={styles.word2}
              style={{ justifySelf: 'end' }}
            >
              <p>каждый важен</p>
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  )
}

export default Career
