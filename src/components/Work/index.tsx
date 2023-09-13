// import Button from '@/components/ui/Button'
import Image from 'next/image'
import arrow from 'public/arrow.svg'

import styles from './styles.module.scss'

const DevPractice = () => {
  return (
    <section className={styles.work_environment}>
      <h1>Погружение в рабочую среду </h1>
      <div className="container">
        <div className={styles.work_environment_main}>
          <div className={styles.work_environment_main_1}>
            <div className={styles.column1}>
              <p>
                {'<'}01{'>'}{' '}
              </p>
              <br /> <br />
              <p>
                {' '}
                <b>6 месяцев</b> <br />
                офлайн обучения <br />в офисе qazdev
              </p>
            </div>
            <div className={styles.column2}>
              <p>
                {'<'}02{'>'}
              </p>
              <br /> <br />
              <p>
                <b>60% практики</b> на <br /> боевом проекте и <br />{' '}
                <b>40% теоретического </b> <br /> материала
              </p>
            </div>
            <div className={styles.column3}>
              <p>
                {'<'}03{'>'}
              </p>
              <br /> <br />
              <p>
                {' '}
                <b>
                  непрерывная <br /> обратная связь
                </b>{' '}
                <br /> от опытных специалистов{' '}
              </p>
            </div>
            <div className={styles.column4}>
              <p>
                {'<'}04{'>'}{' '}
              </p>
              <br /> <br />
              <p>
                Возможность <b>трудоустройства</b>{' '}
              </p>
            </div>
          </div>

          <div className={styles.work_environment_main_2}>
            <p>
              Обучение в{' '}
              <strong>
                <em>qazdev </em>
              </strong>{' '}
              – отличная возможность <br /> получить практический опыт, развить{' '}
              <br />
              hard & soft skills и ускорить свой <br /> профессиональный рост в
              IT
            </p>
            <div className={styles.work_environment_main_2_image}></div>
          </div>

          <div className={styles.work_environment_main_3}>
            <button>
              Успеть записаться
              <Image src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const Distance = () => {
  return (
    <section className={styles.distance}>
      <div></div>
      <div className={styles.distance_line}></div>
      <div></div>
    </section>
  )
}

const Dev = () => {
  return (
    <>
      <Distance />
      <DevPractice />
      <Distance />
    </>
  )
}

export default Dev
