import s from "./HowWorks.module.scss";
import workIcon1 from "../../assets/icons/workIcon1.svg";
import workIcon2 from "../../assets/icons/workIcon2.svg";
import workIcon3 from "../../assets/icons/workIcon3.svg";
import workIcon4 from "../../assets/icons/workIcon4.svg";
import telega from "../../assets/icons/telega.svg";
import xx from "../../assets/icons/xx.svg";
import insta from "../../assets/icons/insta.svg";
import facebook from "../../assets/icons/facebook.svg";
import gmail from "../../assets/icons/gmail.svg";

export const HowWorks = () => {
  const data = [
    {
      icon: workIcon1,
      title: "How does the yearly capital appreciation distribution work?",
      text: "Each property is appraised annually, and when an increase in value is identified, additional shares are issued. The proceeds from the sale of these new shares are distributed to existing shareholders in the same manner as their regular monthly passive income",
    },
    {
      icon: workIcon2,
      title: "What are some of the advantages created with this system?",
      text: "This platform gives investors the power to unlock the growing value of their real estate assets without the need to sell or take on interest-bearing loans. It also provides the flexibility to diversify portfolios by reinvesting earnings into shares of other properties. Additionally, current shareholders are offered an exclusive one-week window to increase their stake in existing properties by purchasing newly issued capital appreciation shares",
    },
    {
      icon: workIcon3,
      title: "Who can participate?",
      text: "By offering $100 shares, we democratize real estate ownership, making it accessible to a wider audience and allowing anyone to participate in one of the world’s most lucrative markets. This forward-thinking platform removes traditional barriers such as large down payments, interest payments, and credit checks. Through the integration of blockchain technology, smart contracts, and cryptocurrency, we deliver a seamless and instant investment experience, offering unmatched transparency, security, cost efficiency, and global accessibility.",
    },
    {
      icon: workIcon4,
      title: "Experience the future of real estate investing now!",
      text: "",
    },
  ];

  const media = [
    {
      icon: xx,
      link: "",
    },
    {
      icon: telega,
      link: "",
    },
    {
      icon: facebook,
      link: "",
    },
    {
      icon: insta,
      link: "",
    },
  ];
  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__title}> How It Works?</h1>
      <div className={s.main__cards}>
        {data.map((item, index) => (
          <div className={s.card} key={index}>
            <div className={s.card__top}>
              <img src={item.icon} alt="" className={s.card__img} />
              <p className={s.card__title}>{item.title}</p>
            </div>
            {index == 3 ? (
              <div className={s.card__content}>
                <div className={s.card__left}>
                  <div className={s.card__inner}>
                    <p>
                      Visit our <a href="#faq">FAQ</a> for even more detailed
                      questions and answers
                    </p>
                  </div>
                  <div className={s.card__inner}>
                    <p>Connect with us on social media: </p>
                    <div className={s.card__media}>
                      {media.map((item, index) => (
                        <a href={item.link} key={index}>
                          <img src={item.icon} alt="" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={s.card__right}>
                  <div className={s.card__inner}>
                    <p>
                      Join our main email newsletter for company-wide
                      announcements, or visit any individual property page to
                      subscribe to its specific newsletter for updates on that
                      property:
                    </p>
                    <div className={s.email}>
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className={s.input}
                      />
                      <button className={s.join}>
                        Join <img src={gmail} alt="gmail" />
                      </button>
                    </div>
                  </div>
                  <div className={s.card__inner}>
                    <p className={s.contacts}>
                      Message our <a href="">Live Chat</a> or send us an email
                      anytime at <a href="">support@passivemoney.com</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className={s.card__text}>{item.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
