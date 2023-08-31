
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
        <h1>Dev <br /> Practice</h1>
        <div className={styles.new_flow}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>
     </div>
     <div className={styles.dev_section2}>
        <div className={styles.dev_section2_p}><p><b>Выращиваем коллег</b></p></div>
        <div className={styles.dev_section2_text}><p className={styles.dev_section2_text_1}>Обучение на практике <br />под руководством опытных <br /> разработчиков <strong><em>qazdev</em></strong> </p>
        <p className={styles.dev_section2_text_2}>{'<'}Java Spring Framework{'>'}</p>
        </div>
        <div></div>
     </div>
    </section>
  )
}

export default DevPractice
