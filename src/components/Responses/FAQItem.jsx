import React, { useState } from "react";
import classNames from "classnames";
import styles from "./FAQItem.module.scss";
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";

const FAQItem = ({ question, answer, fully = false }) => {
  const [showFully, setShowFully] = useState(fully);

  const onClickShowFullyButtonHandler = () => {
    setShowFully(!showFully);
  };

  return (
    <div
      className={classNames(styles.card, {})}
      onClick={onClickShowFullyButtonHandler}
    >
      <div className={styles.card__header}>
        <h3 className={styles.card__title}>{question}</h3>
        <button className={styles.card__fullyButton}>
          <img src={showFully ? minus : plus} alt="marker" />
        </button>
      </div>
      <div
        className={classNames(styles.card__description, {
          [styles.card__description__fully]: showFully,
        })}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
