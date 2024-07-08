import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import message from './../../assets/images/message.png';
import star from './../../assets/images/rating.svg';
import show from './../../assets/images/bottom.svg';
//import { comments } from "./comments.data";
import { useDispatch } from 'react-redux';
import { setReview } from '../../slice';
import { useGetAllReviewQuery } from '../../service';
import { showOrHide } from '../../helpers';

const Comments = () => {
  const dispatch = useDispatch();
  const { data: review, isLoading } = useGetAllReviewQuery();

  const [showAllComments, setShowAllComments] = useState(false);
  const [buttonText, setButtonText] = useState('showMore');

  // const visibleComments = showAllComments ? review : review.slice(0, 3);
  //const visibleComments = showAllComments && review ? review.slice(0, 3) : [];
  const visibleComments = showOrHide(review, showAllComments);

  const toggleComments = () => {
    setShowAllComments(!showAllComments);
    setButtonText(showAllComments ? 'showMore' : 'hide');
  };

  const { t } = useTranslation();

  console.log(review);

  useEffect(() => {
    if (review) {
      dispatch(setReview(review));
    }
  }, [dispatch, review]);

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
                  <img src={star} alt='stars' />
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

      {review && review.length > 3 && (
        <button onClick={toggleComments} className={styles.showMore}>
          <p>{t(buttonText)}</p>
          <img src={show} alt='show-icon' className={showAllComments ? styles.turnOver : ''} />
        </button>
      )}
    </section>
  );
};

export default Comments;
