'use client'
import Image from 'next/image'
import classNames from 'classnames'
import { useFormik } from 'formik'
// @ts-ignore
import InputMask from 'react-input-mask'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { ButtonVariant } from '../ui/Button/interface'
import Input from '../ui/Input'
import { InputVariant } from '../ui/Input/interface'
import styles from './styles.module.scss'
import * as Yup from 'yup'
import { IFormDev } from './interface'

const validationSchema = Yup.object({
  username: Yup.string().required('Заполните поле "Имя"'),
  phone: Yup.string().required('Заполните поле "Телефон"'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
})

const FormDev = ({ className, host }: IFormDev) => {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      phone: '',
      acceptedTerms: false,
    },
    onSubmit: async (values, { resetForm }) => {
      await fetch(`http://${host}/api/education`, {
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

  const userNameInputProps = {
    className: styles.input,
    name: 'username',
    onChange: formik.handleChange,
    type: 'text',
    placeholder:
      (formik.touched.username && formik.errors.username) || 'Ваше имя',
    value: formik.values.username,
    error: !!(formik.touched.username && formik.errors.username),
    variant: InputVariant.white,
  }
  const phoneInputProps = {
    className: styles.input,
    name: 'phone',
    onChange: formik.handleChange,
    type: 'text',
    placeholder: (formik.touched.phone && formik.errors.phone) || 'Телефон',
    value: formik.values.phone,
    error: !!(formik.touched.phone && formik.errors.phone),
    variant: InputVariant.white,
  }

  const checkBoxInputProps = {
    className: styles.custom_checkbox,
    name: 'acceptedTerms',
    onChange: formik.handleChange,
    type: 'checkbox',
    checked: formik.values.acceptedTerms,

    error: !!(formik.touched.acceptedTerms && formik.errors.acceptedTerms),
    variant: InputVariant.white,
  }

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <div className={styles.agreement}>
        <Input {...checkBoxInputProps} />
        <label>
          Принимаю <a href=""> политику конфиденциальности.</a>
        </label>
        {/* {formik.touched.acceptedTerms && formik.errors.acceptedTerms }</div> : null} */}
        {/* {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
          <span className={styles.errorText}>
            {formik.errors.acceptedTerms}
          </span>
        ) : null} */}
      </div>
      <Button className={styles.submit_button} variant={ButtonVariant.white}>
        Отправить
      </Button>
    </form>
  )
}

export default FormDev
