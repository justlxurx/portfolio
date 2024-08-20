import s from "./Main.module.scss";
import cards from "../../assets/images/cards.png";
import cardsMobile from "../../assets/images/cardsMobile.png";
import { Link } from "react-router-dom";
import { useMobile } from "../../hooks/useMobile";

export const Main = () => {
  const isMobile = useMobile();
  return (
    <div className={`${s.main} container`}>
      <div className={s.main__left}>
        <h1 className={s.main__heading}>
          Make your first step towards <span> passive income</span> and
          financial independence <span>with us!</span>
        </h1>
        <Link to="/properties">
          <button className={s.main__button}>Properties</button>
        </Link>
      </div>
      <div className={s.main__right}>
        <img src={isMobile ? cardsMobile : cards} alt="cards" />
      </div>
    </div>
  );
};
