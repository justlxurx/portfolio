'use client'
import Image from 'next/image'
import classNames from 'classnames'
import { useFormik } from 'formik'
// @ts-ignore
import InputMask from 'react-input-mask'

import Button from '../ui/Button'
import { ButtonVariant } from '../ui/Button/interface'
import Input from '../ui/Input'
import { InputVariant } from '../ui/Input/interface'

import styles from './styles.module.scss'

const TeamMember = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      phone: '',
      about: '',
    },
    onSubmit: (values) => {
      alert(`Функционал в разработке! Введенные данные:
        Имя: ${values.userName}
        Номер телефона: ${values.phone} 
      `)
    },
  })

  const userNameInputProps = {
    className: styles.input,
    name: 'userName',
    onChange: formik.handleChange,
    type: 'text',
    placeholder: 'Ваше имя',
    value: formik.values.userName,
    variant: InputVariant.white,
  }

  const phoneInputProps = {
    className: styles.input,
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
    variant: InputVariant.white,
  }

  const aboutUserInputProps = {
    className: classNames(styles.input, styles.about),
    name: 'about',
    onChange: formik.handleChange,
    type: 'text',
    placeholder: 'Расскажите немного о своем опыте',
    value: formik.values.about,
    variant: InputVariant.white,
    maxLength: 1000,
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        Хочу <br /> в команду
      </h2>
      <h3 className={styles.subheader}>
        Превратите свою страсть к IT <br /> в карьеру - присоединяйтесь к нам!
      </h3>
      <div className={styles.inputs_wrapper}>
        <Input {...userNameInputProps} />
        <InputMask
          mask={'+9 (999) 999-99-99'}
          maskChar={' '}
          value={formik.values.phone}
          onChange={formik.handleChange}
        >
          {() => <Input {...phoneInputProps} />}
        </InputMask>
      </div>
      <Input {...aboutUserInputProps} />
      <div className={styles.additional}>
        <label className={styles.additional__clip_button}>
          Прикрепить файл
        </label>
        <span className={styles.additional__about_symbols}>
          {formik.values.about.length}/1000
        </span>
      </div>
      <Button className={styles.submit_button} variant={ButtonVariant.white}>
        Отправить
      </Button>
    </section>
  )
}

export default TeamMember
