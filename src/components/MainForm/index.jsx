import { React } from 'react';
import styles from './styles.module.scss';
import phone1 from './../../assets/images/phone1.svg';
import { useFormik } from 'formik';
import { useFormMutation } from '../../service';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../Navbar/Navbar';
import InputMask from 'react-input-mask';

const Main = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-zА-Яа-яЁё]+$/, 'Имя должно содержать только буквы')
        .max(15, 'Имя должно состоит максимум 15 символов')
        .required('Заполните поле "Ваше имя"'),
      phone: Yup.string().max(15, 'Неправильный номер телефона').required('Заполните поле "Номер телефона"'),
    }),
    // onSubmit: (values, { resetForm }) => {
    //   alert(JSON.stringify(values, null, 2));
    //   console.log(values);
    //   resetForm();
    // },
    onSubmit: async (values, { resetForm }) => {
      try {
        // Вызываем функцию отправки формы из нашего formApi
        const response = await submitForm(values);
        alert('Данные успешно отправлено');

        console.log('Response:', response);
        resetForm();
        // Здесь можно обработать ответ, например, обновить состояние компонента
      } catch (error) {
        console.error('Error submitting form:', error);
        // Здесь можно обработать ошибку, например, показать сообщение пользователю
      }
    },
  });
  const [submitForm] = useFormMutation();

  const [t] = useTranslation();

  return (
    <div className={styles.outer}>
      <Navbar />
      <section className={styles.main}>
        <div className={styles.main__infoVisa}>
          <h4 className={styles.main__infoVisaHeading}>BLS Almaty Visa</h4>
          <p className={styles.main__infoVisaText}>{t('info')}</p>
        </div>

        <div className={styles.main__topSection}>
          <div className={styles.main__leftSection}>
            <h1 className={styles.heading}>{t('proposition')}</h1>
            <p className={styles.text}>{t('helpWithReg')}</p>
            <p className={styles.text}> {t('visaManager')}</p>

            <div className={styles.calling}>
              <p className={styles.calling__text}>{t('callUs')}</p>
              <div className={styles.calling__phoneNumbers}>
                <img src={phone1} alt='phone' />
                <p>
                  +7 (727) 339 83 23 <br />
                  +7 (707) 908 08 29 <br />
                  {/* +7 (707) 055 67 27
                <br /> +7 (708) 808 93 03
                <br /> +7 (707) 228 90 80 */}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.main__rightSection}>
            <h1 className={styles.heading}>{t('formHeading')}</h1>
            <form onSubmit={formik.handleSubmit}>
              <input
                type='text'
                name='name'
                placeholder={t('yourName')}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <div
                className={styles.error}
                style={{
                  color: formik.touched.name && formik.errors.name ? 'visible' : 'hidden',
                }}
              >
                {formik.errors.name}
              </div>
              <InputMask
                mask={'9-999-999-99-99'}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {() => (
                  <input
                    type='text'
                    name='phone'
                    placeholder={t('number')}
                    // value={formik.values.phone}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  />
                )}
              </InputMask>

              {formik.touched.phone && formik.errors.phone ? (
                <div className={styles.error}>{formik.errors.phone}</div>
              ) : null}
              <button type={'submit'}>{t('send')}</button>
            </form>
          </div>
        </div>
        <div className={styles.main__bottomSection}>
          <p className={styles.main__bottomSection__text}>{t('freeConsult')}</p>
          <ul className={styles.main__bottomSection__list}>
            <li>{t('firstListForm')}</li>
            <li>{t('secondListForm')}</li>
            <li>{t('thirdListForm')}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Main;
