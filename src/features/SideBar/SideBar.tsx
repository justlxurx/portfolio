import s from "./SideBar.module.scss";
import { Logo } from "../../assets/icons/logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AdminProfile } from "../../assets/icons/adminProfile";

export const SideBar = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleSetActiveButton = (val: number) => {
    setActiveButton(val);
  };
  const data = [
    {
      title: "Properties",
      link: "/admin/properties",
    },
    {
      title: "Name",
      link: "/admin",
    },
  ];
  return (
    <div className={s.main}>
      <div>
        <div className={s.admin}>
          <AdminProfile />
          <p className={s.admin__text}>Admin1</p>
        </div>
        <div className={s.menu}>
          <ul className={s.menu__list}>
            {data.map((item, index) => (
              <li className={s.menu__listItem} key={index}>
                <Link to={item.link} className={s.menu__link}>
                  <button
                    style={{
                      color: `${
                        activeButton === index + 1
                          ? "rgba(24, 39, 67, 1)"
                          : "white"
                      }`,
                      background: `${
                        activeButton === index + 1
                          ? "rgba(190, 255, 107, 1)"
                          : "unset"
                      }`,
                    }}
                    className={s.menu__button}
                    onClick={() => handleSetActiveButton(index + 1)}
                  >
                    {item.title}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className={s.main__logout}>Log Out</button>
    </div>
  );
};
