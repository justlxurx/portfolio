import Image from 'next/image'
import classNames from 'classnames'
import buttons from 'public/buttons.svg'
import firstBlockMainIcon from 'public/gallery_first_block_main_icon.svg'
import firstBlockSymbolsIcon from 'public/gallery_first_block_symbols_icon.svg'

import { FormattedString } from '@/helpers/FormattedString'

import styles from './styles.module.scss'

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.header}>
        <FormattedString sentence="qazdev - не просто код" />
      </h2>
      <header className={styles.additional}>
        <p className={styles.additional__info}>
          Наша команда постоянно развивается и активно участвует в
          профессиональных мероприятиях, образовательных программах и языковых
          курсах
        </p>
        <Image
          className={styles.additional__buttons}
          src={buttons}
          alt="Shift + F6"
        />
      </header>
      <div className={styles.blocks}>
        <div className={classNames(styles.blocks__first, styles.first)}>
          <div className={styles.first__inner}>
            <span className={styles.first__inner_header}>
              Участвуем и выступаем <br /> на митапах
            </span>
            <div className={styles.first__inner_icon}>
              <Image
                src={firstBlockMainIcon}
                alt="First block main icon"
                fill={true}
              />
            </div>
            <span className={styles.first__inner_footer}>
              Посещаем профильные <br /> конференции
            </span>
          </div>
          <div className={styles.first__additional}>
            <Image
              className={styles.first__additional_top}
              src={firstBlockSymbolsIcon}
              alt="1cm"
            />
            <span className={styles.first__additional_bottom}>
              event направление
            </span>
          </div>
        </div>
        <div className={styles.blocks__second}>2</div>
        <div className={styles.blocks__third}>3</div>
        <div className={styles.blocks__fourth}>4</div>
        <div className={styles.blocks__fives}>5</div>
        <div className={styles.blocks__sixth}>6</div>
      </div>
    </section>
  )
}

export default Gallery
