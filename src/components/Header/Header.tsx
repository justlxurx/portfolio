import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";
import { Profile } from "../../assets/icons/profile";
import burger from "../../assets/icons/burger.svg";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useState } from "react";
import { authSelect } from "../../slice/authSlice";
import { useAppSelector } from "../../hooks/hooks";
import useScrollToAnchor from "../../hooks/useScrollToAnchor";

export const Header = () => {
  useScrollToAnchor();
  const auth = useAppSelector(authSelect);
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const links = [
    {
      title: "Properties",
      links: "/properties",
    },
    {
      title: "FAQ",
      links: "/#faq",
    },
    {
      title: "Contact Us",
      links: "/#contacts",
    },
  ];
  console.log("auth :" + auth.isAuthorized);
  return (
    <header
      className={`${s.main} container`}
      style={{ background: `${isOpen ? "rgba(84, 126, 208, 1)" : ""}` }}
    >
      <Link to={"/"} className={s.logo}>
        <Logo />
      </Link>
      <ul className={s.main__list}>
        {links.map((item, index) => (
          <li key={index}>
            <Link to={`${item.links}`} className={s.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={s.main__buttonWrap}>
        <button
          className={s.main__button}
          style={{
            background: `${isConnected ? "white" : ""}`,
            color: `${isConnected ? "rgba(24, 39, 67, 1)" : "white"}`,
          }}
          onClick={() => {
            isConnected ? open({ view: "Account" }) : open({ view: "Connect" });
          }}
        >
          {isConnected
            ? `${address!.slice(0, 12)}...${address!.slice(-2)}`
            : " Connect wallet"}
        </button>
        <Link to={"/login"} className={s.link}>
          <button
            className={s.accountButton}
            style={{
              backgroundColor: auth.isAuthorized ? "white" : "unset",
              color: auth.isAuthorized ? "rgba(24, 39, 67, 1)" : "white",
            }}
          >
            <Profile color={auth.isAuthorized ? "black" : "white"} />
            My account
          </button>
        </Link>
      </div>
      <div className={s.burger}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src={burger}
            alt="burger"
            style={{ transform: `${isOpen ? "rotate(90deg)" : ""}` }}
          />
        </button>
      </div>

      {isOpen && (
        <div className={s.menu}>
          <ul className={s.menu__list}>
            {links.map((item, index) => (
              <li key={index}>
                <a href={`${item.links}`} className={s.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className={s.menu__buttonWrap}>
            <button
              className={s.main__button}
              style={{
                background: `${isConnected ? "white" : ""}`,
                color: `${isConnected ? "rgba(24, 39, 67, 1)" : "white"}`,
              }}
              onClick={() => {
                isConnected
                  ? open({ view: "Account" })
                  : open({ view: "Connect" });
              }}
            >
              {isConnected
                ? `${address!.slice(0, 12)}...${address!.slice(-2)}`
                : " Connect wallet"}
            </button>
            <Link to={"/login"} className={s.link}>
              <button className={s.accountButton}>
                <Profile />
                My account
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
