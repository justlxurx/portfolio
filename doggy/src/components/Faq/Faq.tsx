import s from "./Faq.module.scss";
// import { Plus } from "../../assets/icons/plus";
import { useState } from "react";
import plus from "../../assets/images/plus.svg";

export const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const toggleOpenHandler1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleOpenHandler2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleOpenHandler3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleOpenHandler4 = () => {
    setIsOpen4(!isOpen4);
  };
  const data = [
    {
      title: "What s DoggyAI?",
      text: "text1",
      isOpen: isOpen1,
      toggleFunc: toggleOpenHandler1,
    },
    {
      title: "What s DoggyAI Presale?",
      text: "text2",
      isOpen: isOpen2,
      toggleFunc: toggleOpenHandler2,
    },
    {
      title: "I bought a DoggyAI, where can i see my token?",
      text: "text3",
      isOpen: isOpen3,
      toggleFunc: toggleOpenHandler3,
    },
    {
      title: "Is DoggyAI A Meme Coin?",
      text: "text4",
      isOpen: isOpen4,
      toggleFunc: toggleOpenHandler4,
    },
  ];

  return (
    <section className={`${s.faq} ${s.container}`} id="faq">
      <p className={s.faq__title}>FAQ</p>
      <div className={s.faq__contentWrapper}>
        {data.map((item, id) => (
          <div key={id} className={s.faq__content}>
            <div className={s.question}>
              <p className={s.question__text}>{item.title}</p>
              <button onClick={item.toggleFunc}>
                {/* <Plus /> */}
                <img src={plus} alt="plus" className={s.plus} />
              </button>
            </div>
            {item.isOpen ? <div className={s.answer}>{item.text}</div> : ""}
          </div>
        ))}
      </div>
    </section>
  );
};
