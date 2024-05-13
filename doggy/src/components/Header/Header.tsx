import s from "./Header.module.scss";
import { BottomIcon } from "../../assets/icons/bottom";
import { About } from "./About/About";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.svg";
import lang from "../../assets/images/lang.svg";
import down from "../../assets/images/down.svg";
import burger from "../../assets/images/burger.svg";
import up from "../../assets/images/up.svg";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShow(true);
  };
  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleCloseModal = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as HTMLElement)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseModal);
    return () => {
      document.removeEventListener("click", handleCloseModal);
    };
  }, []);
  const link = [
    {
      path: "#staking",
      title: "Staking",
    },
    {
      path: "#whitepaper",
      title: "Whitepaper",
    },
    {
      title: "About",
      icon: true,
    },
    {
      path: "#audit",
      title: "Audit",
    },
  ];

  return (
    <div>
      <header className={s.mainHeader}>
        <div className={s.mainHeader__list}>
          <div className={s.logo}>
            {/* <OrangeDoggyIcon /> */}
            <img src={logo} alt="logo" />
          </div>
          <ul className={s.list}>
            {link.map((item, id) => (
              <li className={s.list__item} key={id}>
                {item.icon ? (
                  <div className={s.link} ref={modalRef}>
                    {item.title}
                    <button className={s.bottomButton} onClick={handleShow}>
                      <BottomIcon />
                    </button>
                    {show && (
                      <div className={s.about}>
                        <About />
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={item.path}>{item.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.buttons}>
          <button className={s.buttonBuy}>BUY NOW</button>
          <button className={s.buttonLang}>
            <div className={s.lang}>
              <img src={lang} alt="lang" className={s.buttonLang__langIcon} />
              En
            </div>
            <img src={down} alt="down" className={s.buttonLang__downIcon} />
          </button>
          <button onClick={handleShowMenu}>
            <img src={burger} alt="burger" className={s.burger} />
          </button>
        </div>
      </header>
      {showMenu && (
        <ul className={s.mobileList}>
          {link.map((item, id) => (
            <li className={s.mobileList__item} key={id}>
              {item.icon ? (
                <>
                  <div className={s.mobileList__link} ref={modalRef}>
                    {item.title}
                    <button
                      className={s.mobileList__bottomButton}
                      onClick={handleShowAbout}
                    >
                      <img
                        src={up}
                        alt="up"
                        style={{
                          transform: `${showAbout ? "rotate(180deg)" : ""}`,
                        }}
                      />
                    </button>
                  </div>
                  {showAbout && (
                    <ul className={s.mobileList__aboutList}>
                      <li className={s.mobileList__aboutListItem}>
                        <a href="#doggyai">What is DoggieAI?</a>
                      </li>
                      <li className={s.mobileList__aboutListItem}>
                        <a href="#buy"> How to buy</a>
                      </li>
                      <li className={s.mobileList__aboutListItem}>
                        <a href="#faq">FAQ</a>
                      </li>
                    </ul>
                  )}{" "}
                </>
              ) : (
                <a href={item.path}>{item.title}</a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
