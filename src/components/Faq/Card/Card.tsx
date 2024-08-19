import s from "./Card.module.scss";
import { useState } from "react";
import { Plus } from "../../../assets/icons/plus";
import { Minus } from "../../../assets/icons/minus";

export const QuestionCard = ({
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
    <button onClick={toggleOpenHandler} className={s.faqButton}>
      <div
        className={s.faqContent}
        style={{
          background: `${isOpen ? "white" : "rgba(84, 126, 208, 0.1)"}`,
        }}
      >
        <p
          className={s.question}
          style={{ color: `${isOpen ? "rgba(24, 39, 67, 1)" : "white"}` }}
        >
          {question}
        </p>
        {isOpen ? <p className={s.answer}>{answer}</p> : ""}
      </div>
      <div className={s.faqIcon}>{isOpen ? <Minus /> : <Plus />}</div>
    </button>
  );
};
