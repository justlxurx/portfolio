import { React } from 'react';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import { sendForm } from '../../slice';
import { useFormMutation } from '../../service';
import { useDispatch } from 'react-redux';
import { useShengenImgMutation } from '../../service';
import * as Yup from 'yup';

const Test = () => {
  const formik = useFormik({
    initialValues: {
      image: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-zА-Яа-яЁё]+$/, 'Имя должно содержать только буквы')
        .max(15, 'Имя должно состоит максимум 15 символов')
        .required('Заполните поле "Ваше имя"'),
      image: Yup.string().required('Заполните поле "Ваше изображение"'),
    }),
    // onSubmit: (values, { resetForm }) => {
    //   alert(JSON.stringify(values, null, 2));
    //   console.log(values);
    //   resetForm();
    // },
    onSubmit: async (values) => {
      try {
        // Вызываем функцию отправки формы из нашего formApi
        const response = await submitForm(values);
        console.log('Response:', response);
        // Здесь можно обработать ответ, например, обновить состояние компонента
      } catch (error) {
        console.error('Error submitting form:', error);
        // Здесь можно обработать ошибку, например, показать сообщение пользователю
      }
    },
  });
  const [submitForm] = useShengenImgMutation();
  return (
    <section className={styles.main}>
      <form onSubmit={formik.handleSubmit}>
        <input
          type='text'
          name='image'
          placeholder='Ваше изображение'
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div
          className={styles.error}
          style={{
            color: formik.touched.image && formik.errors.image ? 'visible' : 'hidden',
          }}
        >
          {formik.errors.image}
        </div>
        <input
          type='text'
          name='name'
          placeholder='Ваше имя'
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
        <button type={'submit'}>Отправить</button>
      </form>
    </section>
  );
};

export default Test;
