import s from "./Modal.module.scss";
import { FaXmark } from "react-icons/fa6";

export const Modal = ({title, onClose }) => {
  return (
    <div className={s.wrap}>
      <section className={s.main}>
        <button onClick={onClose} className={s.icon__button}>  
        <FaXmark size={15} color="black"/>
        </button>
        <p className={s.main__text}>{title}</p>
      </section>
    </div>
  );
};
