'use client'
import React, { ChangeEvent, useState } from 'react'
import classNames from 'classnames'
import { useFormik } from 'formik'
// @ts-ignore
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import Popup from '../Popup'
import Button from '../ui/Button'
import { ButtonVariant } from '../ui/Button/interface'
import Input from '../ui/Input'
import { InputVariant } from '../ui/Input/interface'
import { AnimationWrapper } from '../AnimationWrapper'
import styles from './styles.module.scss'
import Image from 'next/image'
import smile from 'public/smile2.svg'
import close from 'public/close2.svg'

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Заполните поле "Имя"')
    .matches(/^[A-Za-zА-Яа-яЁё]+$/, 'Имя должно содержать только буквы'),
  phone: Yup.string().required('Заполните поле "Телефон"'),
  about: Yup.string().required('Заполните поле "Расскажите о себе"'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
})

interface ITeamMemberProps {
  host: string | null
}

const TeamMember: React.FC<ITeamMemberProps> = ({ host }) => {
  const [selectedFileName, setSelectedFileName] = useState('')
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const onClose = () => {
    setIsPopupVisible(false)
  }
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      phone: '',
      about: '',
      acceptedTerms: false,
      file: undefined,
    },
    onSubmit: async (values, { resetForm }) => {
      const data = {
        username: values.username,
        phone: values.phone,
        about: values.about,
      }

      const addTeamMember = async (data: any) => {
        fetch(`//${host}/api/team-member`, {
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
            setSelectedFileName('')
          })
          .catch((error) => {
            //TODO: Переделать на popup
            console.log(error)
          })
      }

      if (values.file) {
        const formData = new FormData()
        formData.set('file', values.file)

        await fetch(`//${host}/api/file-upload`, {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`)
            }

            return response.json()
          })
          .then(async (response) => {
            await addTeamMember({ ...data, url: response.url })
          })
      } else {
        await addTeamMember(data)
      }
    },
  })

  const userNameInputProps = {
    className: styles.input,
    name: 'username',
    onChange: formik.handleChange,
    type: 'text',
    style: {
      color:
        formik.touched.username && formik.errors.username ? 'red' : 'white',
    },
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
    style: {
      color:
        formik.touched.username && formik.errors.username ? 'red' : 'white',
    },
    placeholder: (formik.touched.phone && formik.errors.phone) || 'Телефон',
    value: formik.values.phone,
    error: !!(formik.touched.phone && formik.errors.phone),
    variant: InputVariant.inputColor,
  }

  const aboutUserInputProps = {
    className: classNames(styles.input, styles.about),
    name: 'about',
    onChange: formik.handleChange,
    type: 'text',
    style: {
      color:
        formik.touched.username && formik.errors.username ? 'red' : 'white',
    },
    placeholder:
      (formik.touched.about && formik.errors.about) ||
      'Расскажите немного о своем опыте',
    value: formik.values.about,
    error: !!(formik.touched.about && formik.errors.about),
    variant: InputVariant.inputColor,
    maxLength: 1000,
  }

  const fileInputProps = {
    name: 'file',
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile =
        event.currentTarget.files && event.currentTarget.files[0]
      if (selectedFile) {
        formik.setFieldValue('file', selectedFile)
        setSelectedFileName(selectedFile.name)
      }
    },
    type: 'file',
    accept: '.pdf,.doc,.docx',
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
      <section className={styles.container}>
        <AnimationWrapper custom={2}>
          <h2 className={styles.header}>
            Хочу <br /> в команду
          </h2>
        </AnimationWrapper>
        <AnimationWrapper custom={3}>
          <h3 className={styles.subheader}>
            Превратите свою страсть к IT <br /> в карьеру - присоединяйтесь к
            нам!
          </h3>
        </AnimationWrapper>
        <AnimationWrapper custom={4}>
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
        </AnimationWrapper>
        <AnimationWrapper custom={5}>
          <div className={styles.third_input_block}>
            <Input {...aboutUserInputProps} />
          </div>
        </AnimationWrapper>
        <AnimationWrapper custom={5}>
          <div className={styles.additional}>
            <label className={styles.additional__clip_button}>
              Прикрепить файл {` ${selectedFileName}`}
              <input style={{ visibility: 'hidden' }} {...fileInputProps} />
            </label>
            <span className={styles.additional__about_symbols}>
              {formik.values.about.length}/1000
            </span>
          </div>
        </AnimationWrapper>
        <AnimationWrapper custom={6}>
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
              <a
                onClick={handleDownloadClick}
                className={styles.agreement_link}
              >
                {' '}
                политику конфиденциальности.
              </a>
            </label>
          </div>
        </AnimationWrapper>
        <Button
          className={styles.submit_button}
          variant={ButtonVariant.inputColor}
          // disabled={!formik.isValid || !formik.values.acceptedTerms}
          type="submit"
        >
          Отправить
        </Button>
      </section>
    </form>
  )
}

export default TeamMember
