import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import message from './../../assets/images/message.png';
import show from './../../assets/images/bottom.svg';
import { useGetCommentQuery } from '../../service';
import { showOrHide } from '../../helpers';
import { Form } from './Form';
import { useDispatch, useSelector } from 'react-redux';
import {FaStar} from 'react-icons/fa'
import { setComment } from '../../slice';


const Comments = () => {
  const dispatch = useDispatch();
  const review = useSelector(state => {
    console.log(state); 
    return state.comment.comment;
  });
  const { data: comment, isLoading } = useGetCommentQuery();

  const [showAllComments, setShowAllComments] = useState(false);
  const [buttonText, setButtonText] = useState('showMore');

  const visibleComments = showOrHide(review, showAllComments);

  const toggleComments = () => {
    setShowAllComments(!showAllComments);
    setButtonText(showAllComments ? 'showMore' : 'hide');
  };

  const { t } = useTranslation();

  useEffect(()=>{
    if(comment){
      dispatch(setComment(comment))
    }
   },[comment,dispatch])

  return (
    <section className={`${styles.comments} container`}>
      <div className={styles.comments__heading}>
        <hr />
        <h1>{t('comments')}</h1>
        <hr />
      </div>
      {isLoading ? (
        <p className={styles.loading}>Loading</p>
      ) : (
        <div className={styles.comments__section}>
          {visibleComments ?
            visibleComments.map((comments, index) => (
              <div key={index} className={styles.comments__wrapper} >
                <div className={styles.comments__stars}>
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index+1
                    return (<FaStar key={index} size={30}  color={currentRating <= (comments.rating) ? "#ffc107":"#e8e5e9"} 
                    />)}
                  )}
                </div>

                <p className={styles.comments__text}>{comments.text}</p>
                <div className={styles.comments__message}>
                  <img src={message} alt='message-icon' />
                  <p className={styles.comments__name}>{comments.fullName}</p>
                </div>
                <p className={styles.comments__data}>{comments.createdAt
                ? comments.createdAt.replace(/T(\d{2}:\d{2}:\d{2})\.\d+Z/, ' $1')
                : t('now')}</p>
              </div>
            ))
          : <p>No data found</p>
          }
        </div>
      )}

      {review && review.length > 3 && (
        <button onClick={toggleComments} className={styles.showMore}>
          <p>{t(buttonText)}</p>
          <img src={show} alt='show-icon' className={showAllComments ? styles.turnOver : ''} />
        </button>
      )}

      <Form/>
    </section>
  );
};

export default Comments;
