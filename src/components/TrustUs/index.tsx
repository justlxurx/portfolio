import Image from 'next/image'
import classNames from 'classnames'
import styles from './styles.module.scss'
import logo_1 from './../../../public/logo-1.svg'
import logo_2 from './../../../public/logo-2.png'
import logo_3 from './../../../public/logo-3.png'
import logo_4 from './../../../public/logo-4.png'
import logo_5 from './../../../public/logo-5.png'
import logo_6 from './../../../public/logo-6.png'
import logo_7 from './../../../public/logo-7.png'
import logo_8 from './../../../public/logo-8.png'
import logo_9 from './../../../public/logo-9.png'
import logo_10 from './../../../public/logo-10.png'
import logo_11 from './../../../public/logo-11.png'
import logo_12 from './../../../public/logo-12.png'
import logo_13 from './../../../public/logo-13.png'
import logo_14 from './../../../public/logo-14.png'
import logo_17 from './../../../public/logo-17.png'
import logo_18 from './../../../public/logo-18.png'
const trustUs = () => {
  const logos = [
    {
      img: logo_1,
    },
    {
      img: logo_2,
    },
    {
      img: logo_3,
    },
    {
      img: logo_4,
    },
    {
      img: logo_5,
    },
    {
      img: logo_6,
    },
    {
      img: logo_7,
    },
    {
      img: logo_8,
    },
    {
      img: logo_9,
    },
    {
      img: logo_10,
    },
    {
      img: logo_11,
    },
    {
      img: logo_12,
    },
    {
      img: logo_13,
    },
    {
      img: logo_14,
    },
    // {
    //   img: logo_15,
    // },
    // {
    //   img: logo_16,
    // },
    {
      img: logo_17,
    },
    {
      img: logo_18,
    },
  ]

  return (
    <section className={classNames(styles.trustUs, 'container')}>
      <h2 className={styles.trustUs__heading}>Нам доверяют</h2>
      <div className={styles.trustUs__logos}>
        {logos.map(({ img }, index) => (
          <div key={index} className={styles.trustUs__logoWrapper}>
            <Image src={img} alt="logo" className={styles.trustUs__img} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default trustUs
