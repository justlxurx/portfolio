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
  username: Yup.string()
    .required('Заполните поле "Имя"')
    .matches(/^[A-Za-zА-Яа-яЁё]+$/, 'Имя должно содержать только буквы'),
  phone: Yup.string()
    .required('Заполните поле "Телефон"')
    .min(11, 'Неправильный номер'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf(
      [true],
      'Подтвердите, что вы прочли и согласны с политикой конфиденциальности.',
    ),
})

const ContactUs = ({ className, host }: IContactUs) => {
  // const [isPopupVisible, setIsPopupVisible] = useState(false)
  // const onClose = () => {
  //   setIsPopupVisible(false)
  // }
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      phone: '',
      acceptedTerms: false,
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
          // setIsPopupVisible(true)

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

  const phoneInputProps = {
    name: 'phone',
    onChange: formik.handleChange,
    type: 'text',
    placeholder: (formik.touched.phone && formik.errors.phone) || 'Телефон',
    value: formik.values.phone,
    error: !!(formik.touched.phone && formik.errors.phone),
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
      {/* {isPopupVisible && (
        <Popup>
          <p>Данные успешно отправлены</p>
          <Button onClick={onClose}>Ok</Button>
        </Popup>
      )} */}

      <div className={styles.form__inputs}>
        <Input {...usernameInputProps} />
        {/* {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null} */}
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
                : 'initial',
          }}
        >
          Принимаю{' '}
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
