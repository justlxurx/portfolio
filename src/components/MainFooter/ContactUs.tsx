'use client'
import classNames from 'classnames'
import { useFormik } from 'formik'
// @ts-ignore
import InputMask from 'react-input-mask'
import Image from 'next/image'
import * as Yup from 'yup'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { IContactUs } from './interface'
import Popup from '../Popup'
import { useState } from 'react'
import styles from './ContactUs.module.scss'
import close from 'public/close.svg'
import smile from 'public/smile.png'

const options = [
  { value: 'option1', label: 'Опция 1' },
  { value: 'option2', label: 'Опция 2' },
  // Добавьте другие варианты по мере необходимости
]

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Заполните поле "Имя"')
    .matches(/^[A-Za-zА-Яа-яЁё]+$/, 'Имя должно содержать только буквы'),
  phone: Yup.string()
    .required('Заполните поле "Телефон"')
    .min(11, 'Неправильный номер'),
  email: Yup.string().email('Invalid email').required('Заполните поле "Email"'),
  service: Yup.string().required('Выберите "Выбор услуги"'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf(
      [true],
      'Подтвердите, что вы прочли и согласны с политикой конфиденциальности.',
    ),
  budget: Yup.string().required('Выберите бюджет проекта'),
})

const ContactUs = ({ className, host }: IContactUs) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const handleRadioButtons = (e: any) => (formik.values.budget = e.target.value)
  const onClose = () => {
    setIsPopupVisible(false)
  }
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      email: '',
      service: '',
      phone: '',
      acceptedTerms: false,
      budget: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await fetch(`//${host}/api/contact-us`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          //TODO: Переделать на popup
          setIsPopupVisible(true)
          formik.values.budget = ''
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
    value:
      formik.touched.username && formik.errors.username
        ? ''
        : formik.values.username,
    error: !!(formik.touched.username && formik.errors.username),
  }

  const emailInputProps = {
    name: 'email',
    onChange: formik.handleChange,
    type: 'text',
    placeholder: (formik.touched.email && formik.errors.email) || 'Ваша почта',
    value:
      formik.touched.email && formik.errors.email ? '' : formik.values.email,
    error: !!(formik.touched.email && formik.errors.email),
  }

  const phoneInputProps = {
    name: 'phone',
    onChange: formik.handleChange,
    type: 'text',
    placeholder:
      (formik.touched.phone && formik.errors.phone) || 'Номер телефона',
    value: formik.values.phone,
    error: !!(formik.touched.phone && formik.errors.phone),
  }

  const serviceInputProps = {
    name: 'service',
    onChange: formik.handleChange,
    type: 'select',
    placeholder:
      (formik.touched.service && formik.errors.service) || 'Выбор услуги',
    value: formik.values.service,
    error: !!(formik.touched.service && formik.errors.service),
  }

  const budgetInputProps = {
    name: 'budget',
    type: 'radio',
    value: formik.values.budget,
    error: !!(formik.touched.budget && formik.errors.budget),
  }

  const checkBoxInputProps = {
    className: styles.custom_checkbox,
    name: 'acceptedTerms',
    onChange: formik.handleChange,
    type: 'checkbox',
    checked: formik.values.acceptedTerms,

    error: !!(formik.touched.acceptedTerms && formik.errors.acceptedTerms),
    //variant: InputVariant.white,
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
    <form
      className={classNames(styles.form, className)}
      onSubmit={formik.handleSubmit}
    >
      {isPopupVisible && (
        <Popup src={smile} color={'#eaeaea'} backgroundColor={'black'}>
          <Button onClick={onClose}>
            <Image src={close} alt="close" />
          </Button>
        </Popup>
      )}

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
        <Input {...emailInputProps} />
        <select {...serviceInputProps} className={styles.form__select}>
          <option
            label="Выберите услугу"
            hidden
            style={{
              color:
                formik.touched.service && formik.errors.service
                  ? 'red'
                  : 'initial',
            }}
          />
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.form__budget}>
        <p
          style={{
            color:
              formik.touched.budget && formik.errors.budget ? 'red' : 'initial',
          }}
        >
          Бюджет проекта:
        </p>
        <input
          {...budgetInputProps}
          value="<20k"
          id="price1"
          className={styles.form__radioInput}
          onChange={(e) => handleRadioButtons(e)}
        />
        <label className={styles.form__radio} htmlFor="price1">
          {'<'}$20k
        </label>
        <input
          {...budgetInputProps}
          value="20k-50k"
          id="price2"
          onChange={(e) => handleRadioButtons(e)}
          className={styles.form__radioInput}
        />
        <label className={styles.form__radio} htmlFor="price2">
          $20k -50k
        </label>
        <input
          {...budgetInputProps}
          id="price3"
          value="50k-100K"
          className={styles.form__radioInput}
          onChange={(e) => handleRadioButtons(e)}
        />
        <label className={styles.form__radio} htmlFor="price3">
          $50k -100k
        </label>
        <input
          {...budgetInputProps}
          value="100k-200k"
          className={styles.form__radioInput}
          id="price4"
          onChange={(e) => handleRadioButtons(e)}
        />
        <label className={styles.form__radio} htmlFor="price4">
          $100k -200k
        </label>
        <input
          {...budgetInputProps}
          id="price5"
          value="200k"
          className={styles.form__radioInput}
          onChange={(e) => handleRadioButtons(e)}
        />
        <label className={styles.form__radio} htmlFor="price5">
          $200k
        </label>
      </div>
      <div className={styles.agreement}>
        <Input {...checkBoxInputProps} />
        <label
          style={{
            color:
              formik.touched.acceptedTerms && formik.errors.acceptedTerms
                ? 'red'
                : 'initial',
          }}
        >
          Принимаю
          <a onClick={handleDownloadClick} className={styles.agreement_link}>
            {' '}
            политику конфиденциальности.
          </a>
        </label>
      </div>
      <Button className={styles.form__button}>Отправить</Button>
    </form>
  )
}

export default ContactUs
