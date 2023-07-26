'use client'
import classNames from 'classnames'
import { useFormik } from 'formik'

import Input from '@/components//ui/Input'
import Button from '@/components/ui/Button'

import { IContactUs } from './interface'

import styles from './ContactUs.module.scss'

const ContactUs = ({ className }: IContactUs) => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      phone: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const userNameInputProps = {
    name: 'userName',
    onChange: formik.handleChange,
    type: 'text',
    placeholder: 'Ваше имя',
    value: formik.values.userName,
  }

  const phoneInputProps = {
    name: 'phone',
    onChange: formik.handleChange,
    type: 'number',
    placeholder: 'Телефон',
    value: formik.values.phone,
  }

  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={formik.handleSubmit}
    >
      <div className={styles.form__inputs}>
        <Input {...userNameInputProps} />
        <Input {...phoneInputProps} />
      </div>
      <Button className={styles.form__button}>Отправить</Button>
    </form>
  )
}

export default ContactUs
