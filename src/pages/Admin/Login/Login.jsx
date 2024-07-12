import s from './Login.module.scss';
import Input from '../../../features/Input/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginMutation } from '../../../service';
import { useState } from 'react';


export const Login = () => {
  const [error, setError]= useState('')
  const [log]= useLoginMutation()
  const formik = useFormik({
    initialValues: { 
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // .matches(/^[A-Za-zА-Яа-яЁё]+$/, `${t('comment.nameError2')}`)
        .required('Пожалуйста, введите логин'),
      password: Yup.string()
      .required('Пожалуйста, введите пароль'),
    }),
    onSubmit: async (values) => {
      try {
        event.preventDefault()
        const res = await log(values);
        console.log('Response:', res);
       if (res.data == undefined) {
         setError('Неправильный логин или пароль')
         return
       }
         setError('')
         localStorage.setItem("accessToken", res.data.authToken)
         localStorage.setItem("refreshToken", res.data.refreshToken)
         window.location.href = '/admin/clients'
         console.log('accessToken '+res.data.authToken)
       
         } catch (error) {
          console.error('Error submitting form:', error);
    }
    },
  });
  return (
    <section className={s.main}>
      <form className={s.form} onSubmit={formik.handleSubmit} >
        <h1 className={s.main__title}>Войти в админку</h1>
        <div className={s.inputWrapper}>
            <Input
              title='Логин'
              placeholder='Введите логин'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             {formik.touched.email && formik.errors.email  ? <span className={s.error}>{formik.errors.email}</span> : null}
           
            <Input
              title='Пароль'
              placeholder='Введите пароль'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password  ? <span className={s.error}>{formik.errors.password}</span> : null}
           
        </div>
        
          <button className={s.submitButton} type='submit'>
            Войти
          </button>
          {error!='' && <span style={{color: 'red', fontSize: '14px', padding: '2px 0 0 5px'}}>{error}</span>}
         
      </form>
      
    </section>
  );
};
