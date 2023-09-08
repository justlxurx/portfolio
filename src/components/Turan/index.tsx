import Image from 'next/image'
import classNames from 'classnames'
import white_icon from 'public/white_icon.svg'

import styles from './styles.module.scss'


const Turan = () => {
  return (
    <section className={classNames(styles.container, 'container')}>
    <section className={styles.running_line}>
    <div className={styles.running_line_1}>
      <ul>
        <li>IT event</li>
        <li>Central Asia</li>
        <li>Hackers</li>
        <li>IT developers</li>
        <li>Cybersecurity</li>
        <li>International experts</li>
        <li>Media</li>
        <li>Businessmen</li>
        <li>Discussion</li>
        
        
      </ul>
    </div>
    <div className={styles.running_line_2}>
      <ul>
        <li>30+ speakers</li>
        <li>Registration</li>
        <li>Program</li>
        <li>3000+ participants</li>
        <li>Networking</li>
        <li>Tech community</li>
        <li>Workshop sessions</li>
        <li>Innovation</li>
        <li>Best practices</li>
         
      </ul>
    </div>
  </section>

    <section className={styles.turan}>
      <div className={styles.turan_heading}>
        <div className={styles.turan_heading_logo}></div>
        <div className={styles.turan_heading_line}></div>
        <div className={styles.turan_heading_words}>KazHackStan Turan</div>
        <button><a href="https://kazhackstan.com/" target='_blank'> 
          <div className={styles.turan_button}>
            <Image src={white_icon} alt="arrow" />
          </div>
          <p>Стать участником</p>
         </a>
          </button>
      </div>

      <div className={styles.turan_main}>
        <div className={styles.turan_main_1}>
          <div className={styles.turan_main_1_h1}>
            <div className={styles.turan_main_1_h1_div}>
              <div className={styles.h1_circle}></div>
              <p>13 – 15 сентября 2023</p>
            </div>
          </div>

          <div className={styles.empty_div}></div>

          <div className={styles.turan_main_1_p}>
            <p>
              Cамое масштабное мероприятие в Центральной <br /> Азии,
              объединяющее хакеров, IT-разработчиков,
              <br /> государственных служащих, СМИ и бизнесменов
            </p>
          </div>
        </div>

        <div></div>

        <div className={styles.turan_main_2}>
          <div className={styles.turan_main_2_h1_div}>
            <div className={styles.h1_circle}></div>
            <p>
              Уникальная площадка для обсуждения и продвижения
              <b> кибербезопасности в регионе</b>
            </p>
          </div>

          <div className={styles.turan_main_2_h1_div}>
            <div className={styles.h1_circle}></div>
            <p>
              <b>3000+</b> участников
            </p>
          </div>

          <div className={styles.turan_main_2_h1_div}>
            <div className={styles.h1_circle}></div>
            <p>
              <b> 30+ спикеров со всего мира</b>, включая признанных
              специалистов по кибербезопасности, исследователей и разработчиков
            </p>
          </div>

          <div className={styles.turan_main_2_h1_div}>
            <div className={styles.h1_circle}></div>
            <p>
              Доклады и исследования, открывающие{' '}
              <b> новые страницы в кибербезопасности</b>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.turan_a}>
        Подробная программа на официальном сайте{' '}
        <a href="https://kazhackstan.com" target="_blank"> https://kazhackstan.com</a>
      </div>
    </section>
    </section>
  )
}



export default Turan
