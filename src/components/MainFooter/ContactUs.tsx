'use client'
import classNames from 'classnames'
import { useFormik } from 'formik'
// @ts-ignore
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import Input from '@/components//ui/Input'
import Button from '@/components/ui/Button'

import { IContactUs } from './interface'

import styles from './ContactUs.module.scss'

const validationSchema = Yup.object({
  username: Yup.string().required('Заполните поле "Имя"'),
  phone: Yup.string().required('Заполните поле "Телефон"'),
})

const ContactUs = ({ className, host }: IContactUs) => {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      phone: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await fetch(`http://${host}/api/contact-us`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          //TODO: Переделать на popup
          alert('Данные успешно отправлены')

          resetForm()
        })
        .catch((error) => {
          //TODO: Переделать на popup
          console.log(error)
        })
    },
  })

  const usernameInputProps = {
    name: 'username',
    onChange: formik.handleChange,
    type: 'text',
    placeholder:
      (formik.touched.username && formik.errors.username) || 'Ваше имя',
    value: formik.values.username,
    error: !!(formik.touched.username && formik.errors.username),
  }

  const phoneInputProps = {
    name: 'phone',
    onChange: formik.handleChange,
    type: 'text',
    placeholder: (formik.touched.phone && formik.errors.phone) || 'Телефон',
    value: formik.values.phone,
    error: !!(formik.touched.phone && formik.errors.phone),
  }

  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={formik.handleSubmit}
    >
      <div className={styles.form__inputs}>
        <Input {...usernameInputProps} />
        <InputMask
          mask={'+9 (999) 999-99-99'}
          maskChar={' '}
          value={formik.values.phone}
          onChange={formik.handleChange}
        >
          {() => <Input {...phoneInputProps} />}
        </InputMask>
      </div>
      <Button className={styles.form__button}>Отправить</Button>
    </form>
  )
}

export default ContactUs
