import s from "./Invest.module.scss";
import Smile from "../../assets/icons/smile.svg";
import Dollar from "../../assets/icons/dollar.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Shop from "../../assets/icons/shop.svg";

export const Invest = () => {
  const data = [
    {
      img: Dollar,
      title: "Start with as little as $100 per share",
      description: (
        <p className={s.description}>
          This blockchain-powered feature democratizes real estate ownership,
          making it accessible to anyone. Skip the large down payments, interest
          payments, and credit checks
        </p>
      ),
    },
    {
      img: Calendar,
      title: "Earn monthly & yearly passive income",
      description: (
        <p className={s.description}>
          Receive monthly rental income plus yearly payouts from capital
          appreciation if the property’s value increases. This unique annual
          payout feature, created by PassiveMoney.com, is a groundbreaking
          innovation in the real estate investment industry
        </p>
      ),
    },
    {
      img: Shop,
      title: "Sell whenever you want",
      description: (
        <p className={s.description}>
          Benefit from unmatched liquidity by selling your shares anytime
          through a dedicated marketplace on each property’s webpage, an
          unprecedented feature in real estate investing
        </p>
      ),
    },
    {
      img: Smile,
      title: "Diversify your real estate holdings",
      description: (
        <p className={s.description}>
          Own multiple properties without the landlord headaches. Purchase
          shares in as many properties as you wish
        </p>
      ),
    },
  ];
  return (
    <div className={`${s.main} container`}>
      <div className={s.main__cards}>
        {data.map((item, index) => (
          <div className={s.card} key={index}>
            <div className={s.card__info}>
              <h1 className={s.card__heading}>{item.title}</h1>
              {item.description}
            </div>
            <img src={item.img} alt="icon" className={s.card__img} />
          </div>
        ))}
      </div>
    </div>
  );
};
