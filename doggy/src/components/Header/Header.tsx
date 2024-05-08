import s from "./Header.module.scss";
import { LangIcon } from "../../assets/icons/lang";
import { OrangeDoggyIcon } from "../../assets/icons/DoggyAI";
import { BottomIcon } from "../../assets/icons/bottom";
import { About } from "./About/About";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShow(true);
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
    <header className={s.mainHeader}>
      <div className={s.mainHeader__list}>
        <OrangeDoggyIcon />
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
            <LangIcon />
            En
          </div>
          <BottomIcon width={15} height={24} />
        </button>
      </div>
    </header>
  );
};
