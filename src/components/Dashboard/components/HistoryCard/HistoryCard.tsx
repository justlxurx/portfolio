import s from "./HistoryCard.module.scss";
import { Link } from "react-router-dom";

export const HistoryCard = () => {
  return (
    <div className={s.main}>
      <div className={s.main__top}>
        <p className={s.main__title}>You Invested:</p>
        <p className={s.main__time}>00/00/2024, 10:00 AM</p>
      </div>
      <div className={s.main__bottom}>
        <p className={s.main__val}>-X</p>
        <Link to={""} className={s.main__name}>
          Property 1
        </Link>
      </div>
    </div>
  );
};
