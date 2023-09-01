// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const Table = () => {
  return (
     <section className={styles.table_section}>
        <div className={styles.table_section_1}>
            <div></div>
            <div className={styles.table_section_1_row1}>
                <b><h5>Командная работа</h5></b>
                <p>Стань частью нашей команды в офисе: мы эффективно решаем задачи, умеем 
                    строить коммуникацию и поддерживаем тех, кто в начале пути</p>
            </div>
        </div>
        <div className={styles.table_section_2}>
           <div></div>
            <div className={styles.table_section_2_row1}>
                <b><h5>Попасть могут не все</h5></b>
                <p>Чтобы попасть на интенсив 
                от qazdev, нужно пройти  логическое и математическое онлайн-тестирования,
                а также очное собеседование с куратором</p>
            </div>
            <div className={styles.table_section_2_row2}>
                <div className={styles.column_1}>
                    <div className={styles.column_1_row1}>
                        <div className={styles.column_1_row1_1}></div>
                        <div className={styles.column_1_row1_2}></div>
                    </div>
                    <div className={styles.column_1_row2}></div>
                </div>
                <div className={styles.column_2}></div>
            </div>
        </div>
    </section>
  )
}





export default Table
