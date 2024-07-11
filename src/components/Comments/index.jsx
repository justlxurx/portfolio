import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import message from './../../assets/images/message.png';
import star from './../../assets/images/rating.svg';
import show from './../../assets/images/bottom.svg';
//import { comments } from "./comments.data";
import { setReview } from '../../slice';
//import { useGetAllReviewQuery } from '../../service';
import { useGetCommentQuery } from '../../service';
import { showOrHide } from '../../helpers';
import { Form } from './Form';
import { useSelector } from 'react-redux';
import {FaStar} from 'react-icons/fa'

const Comments = () => {
  // const selector = useSelector(state=>state.comments.comment)
 // const {comment} = useSelector(state=>state.comments)
  const { data: comment, isLoading } = useGetCommentQuery();

  const [showAllComments, setShowAllComments] = useState(false);
  const [buttonText, setButtonText] = useState('showMore');

  const visibleComments = showOrHide(comment, showAllComments);

  const toggleComments = () => {
    setShowAllComments(!showAllComments);
    setButtonText(showAllComments ? 'showMore' : 'hide');
  };

  const { t } = useTranslation();

  console.log(comment);

  return (
    <section className={styles.comments}>
      <div className={styles.comments__heading}>
        <hr />
        <h1>{t('comments')}</h1>
        <hr />
      </div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className={styles.comments__section}>
          {visibleComments &&
            visibleComments.map((comments, index) => (
              <div className={styles.comments__wrapper} key={index}>
                <div className={styles.comments__stars}>
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index+1
                    return (<FaStar size={30}  color={currentRating <= (comments.rating) ? "#ffc107":"#e8e5e9"} 
                    />)}
                  )}
                 
                  {/* <img src={star} alt='stars' /> */}
                </div>

                <p className={styles.comments__text}>{comments.text}</p>
                <div className={styles.comments__message}>
                  <img src={message} alt='message-icon' />
                  <p className={styles.comments__name}>{comments.fullName}</p>
                </div>
                <p className={styles.comments__data}>{comments.createdAt}</p>
              </div>
            ))}
        </div>
      )}

      {comment && comment.length > 3 && (
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
