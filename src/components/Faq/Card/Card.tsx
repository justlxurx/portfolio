import s from "./../Faq.module.scss";
import { useState } from "react";
//import plus from "../../../assets/images/plus.svg";
//import minus from "../../../assets/images/minus.svg";

export const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button onClick={toggleOpenHandler}>
      <div className={s.faq__content}>
        <div className={s.question}>
          <p className={s.question__text}>{question}</p>
          {/* <img src={isOpen ? minus : plus} alt="plus" className={s.plus} /> */}
        </div>
        {isOpen ? <div className={s.answer}>{answer}</div> : ""}
      </div>
    </button>
  );
};
