'use client'
import React from 'react'
import { useFormik } from 'formik'
// @ts-ignore
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useState } from 'react'
import Button from '../ui/Button'
import { ButtonVariant } from '../ui/Button/interface'
import Input from '../ui/Input'
import { InputVariant } from '../ui/Input/interface'
import Popup from '../Popup'
import { IFormDev } from './interface'
import Image from 'next/image'
import smile from 'public/smile2.svg'
import close from 'public/close2.svg'
import styles from './styles.module.scss'

//import InputMaskCorrect from '../InputMaskCorrect'

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁё]+$/, 'Имя должно содержать только буквы')
    .required('Заполните поле "Имя"'),
  phone: Yup.string().required('Заполните поле "Телефон"'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
})

const FormDev = ({ className, host }: IFormDev) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const onClose = () => {
    setIsPopupVisible(false)
  }
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      phone: '',
      acceptedTerms: false,
    },
    onSubmit: async (values, { resetForm }) => {
      //debugger
      const data = {
        username: values.username,
        phone: values.phone,
      }

      await fetch(`http://${host}/api/education`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          //TODO: Переделать на popup
          //alert('Данные успешно отправлены')
          setIsPopupVisible(true)
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
    value:
      formik.touched.username && formik.errors.username
        ? ''
        : formik.values.username,
    error: !!(formik.touched.username && formik.errors.username),
    variant: InputVariant.inputColor,
  }
  const phoneInputProps = {
    className: styles.input,
    name: 'phone',
    onChange: formik.handleChange,
    type: 'text',
    placeholder: (formik.touched.phone && formik.errors.phone) || 'Телефон',
    value: formik.values.phone,
    error: !!(formik.touched.phone && formik.errors.phone),
    variant: InputVariant.inputColor,
  }

  const checkBoxInputProps = {
    className: styles.custom_checkbox,
    name: 'acceptedTerms',
    onChange: formik.handleChange,
    type: 'checkbox',
    checked: formik.values.acceptedTerms,

    error: !!(formik.touched.acceptedTerms && formik.errors.acceptedTerms),
    variant: InputVariant.inputColor,
  }

  const handleDownloadClick = () => {
    // Задайте путь к вашей презентации
    const presentationUrl = '/Политика_конфиденциальности_qazdev.pdf'

    // Создайте ссылку для скачивания
    const downloadLink = document.createElement('a')
    downloadLink.href = presentationUrl
    downloadLink.download = 'Политика_конфиденциальности_qazdev.pdf'

    // Симулируйте клик по ссылке для начала скачивания
    downloadLink.click()
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      {isPopupVisible && (
        <Popup src={smile} color={'black'} backgroundColor={'#eaeaea'}>
          <Button onClick={onClose}>
            <Image src={close} alt="close" />
          </Button>
        </Popup>
      )}
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
        <label
          style={{
            color:
              formik.touched.acceptedTerms && formik.errors.acceptedTerms
                ? 'red'
                : '#EAEAEA',
          }}
        >
          Принимаю{' '}
          <a onClick={handleDownloadClick} className={styles.agreement_link}>
            {' '}
            политику конфиденциальности.
          </a>
        </label>
      </div>
      <Button
        type="submit"
        className={styles.submit_button}
        variant={ButtonVariant.inputColor}
        // disabled={!formik.isValid || !formik.values.acceptedTerms}
      >
        Отправить
      </Button>
    </form>
  )
}

export default FormDev
