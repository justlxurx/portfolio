
import Image from 'next/image'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { useMedia } from 'react-use'

// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const DevPractice = () => {
  return (
    <section className={styles.dev}>
     <div className={styles.dev_section1}>
      <div className={styles.dev_section1_text}>
        <h1>Dev <br /> Practice</h1>
        <p>идет набор на новый поток_</p>
        </div>
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
     </div>
     <div className={styles.dev_section2}>
        <div className={styles.dev_section2_p}><p><b>Выращиваем коллег</b></p></div>
        <div className={styles.dev_section2_text}>
           <p className={styles.dev_section2_text_1}>Обучение на практике <br />под руководством опытных <br /> разработчиков <strong><em>qazdev</em></strong> </p>
           <p className={styles.dev_section2_text_2}>{'<'}Java Spring Framework{'>'}</p>
           <div className={styles.click}>
            <button className={styles.click_plus}>
              +
            </button>
            <div className={styles.click_text}>
              <b><p>ЗАПИСАТЬСЯ</p></b>
              <p style={{color: 'rgba(0, 0, 0, 0.50)'}}>УЧИСЬ У НАС</p>
            </div>
           </div>
        </div>
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
     </div>
    </section>
  )
}

export default DevPractice
