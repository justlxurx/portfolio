import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";
import profile from "../../assets/icons/profile.svg";
import profile__white from "../../assets/icons/profile__white.svg";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

export const Header = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const links = [
    {
      title: "Properties",
      links: "/properties",
    },
    {
      title: "FAQ",
      links: "#faq",
    },
    {
      title: "Contact Us",
      links: "#contact-us",
    },
    // {
    //   title: "Dashboard",
    //   links: "#dashboard",
    // },
  ];
  return (
    <header className={`${s.main} container`}>
      <Link to={"/"}>
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
          <img
            src={`${isConnected ? profile__white : profile}`}
            alt="profile"
          />
        </Link>
      </div>
    </header>
  );
};
