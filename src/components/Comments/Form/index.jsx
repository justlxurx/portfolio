import s from './styles.module.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useCreateCommentMutation } from '../../../service';
import { addComment, rmComment, setComment } from '../../../slice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

export const Form = () =>{
    const [createComment] = useCreateCommentMutation();
    const dispatch = useDispatch();
    const {t} = useTranslation()
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const formik = useFormik({
        initialValues: {
            fullName:"",
            rating:null,
            text:''
        },
        validationSchema: Yup.object({
          fullName: Yup.string()
            .matches(/^[A-Za-zА-Яа-яЁё]+$/, `${t('comment.nameError2')}`)
            .max(15, `${t('comment.nameError3')}`)
            .required(`${t('comment.nameError')}`),
           rating:Yup.number().required( `${t('comment.ratingError')}`),
      text: Yup.string().max(100, `${t('comment.messageError2')}`).required(`${t('comment.messageError')}`),
        }),
           
        onSubmit: async ( values,{ resetForm }) => {
          try {
            // event.preventDefault();
            const response = await createComment(values);
            dispatch(setComment())
            alert(`${t('success')}`);
            console.log('Response:', response );
            resetForm();
            setRating(null)


   } catch (error) {
            console.error('Error submitting form:', error);
              }
        },
 } );
    return(
        <section className={s.main}>
            <h2 className={s.main__title}>{t('comment.title')}</h2>
            <p className={s.main__subtitle}>{t('comment.subtitle')}</p>
           <form className={s.main__form} onSubmit={formik.handleSubmit}>
          <div className={s.rating}>
            <div className={s.error}>{formik.errors.rating}</div>
           {[...Array(5)].map((star, index) => {
                   const currentRating = index+1;
                    return (
                    <label>
                      <input type='radio' name='rating'
                      value={currentRating}
                      onClick={()=> {setRating(currentRating), formik.setFieldValue('rating', currentRating);}}
                      />
                     
                      <FaStar 
                      color={currentRating <= (hover || rating) ? "#ffc107":"white"} 
                      className={s.star} 
                      size={40}
                      onMouseEnter = {()=>setHover(currentRating)}
                      onMouseLeave = {()=>setHover(null)}/>
                       </label> 
                   
                    )}
                  )}
                  </div>
           <div
                className={s.error}
                style={{
                  color: formik.touched.fullName && formik.errors.fullName ? 'visible' : 'hidden',
                }}
              >
                {formik.errors.fullName}
              </div>
            <input type="text" placeholder={t('comment.name')} name='fullName' className={s.main__formInput}  value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
         
              <div
                className={s.error}
                style={{
                  color: formik.touched.text && formik.errors.text ? 'visible' : 'hidden',
                }}
              >
                {formik.errors.text}
              </div>
           <textarea name="text" rows={6} placeholder={t('comment.message')} className={s.main__formText}  value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></textarea>
               
           <button className={s.main__formButton} type='submit'>{t('comment.button')}</button>
           </form>
        </section>
    )
}