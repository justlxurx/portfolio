// import Button from '@/components/ui/Button'
import Image from 'next/image'
import buttons from 'public/buttons.svg'
import Key from 'public/Key.svg'
import styles from './styles.module.scss'

const Programmer = () => {
  return (
    <section className={styles.be_programmer}>
      <div className={styles.nav1}></div>
      <div className={styles.be_programmer_main}>
        <div className={styles.main1}>
          <div className={styles.main1_column1}>
            <p>
              Стать востребованным <br />
              разработчиком
            </p>
            <a href="#form">
              <button>
                <Image src={Key} alt="button" />
              </button>
            </a>
          </div>
          <div className={styles.main1_column2}>
            <div className={styles.main1_column2_buttons}>
              <Image
                className={styles.main1_column2_buttons_img}
                src={buttons}
                alt="Shift + F6"
              />
            </div>
            <div className={styles.main1_column2_p}>
              <p>
                В конце обучения студенты <br />
                получат{' '}
                <span>
                  сертификаты <br /> и рекомендательные письма
                </span>
                <br />
                для будущих работодателей.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ab_lines}>
          <div></div>
          <div className={styles.a}></div>
          <div className={styles.b}></div>
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

const BeProgrammer = () => {
  return (
    <>
      <Distance />
      <Programmer />
    </>
  )
}

export default BeProgrammer
