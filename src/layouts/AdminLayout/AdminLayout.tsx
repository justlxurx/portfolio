import { Outlet } from "react-router-dom";
import { SideBar } from "../../features/SideBar/SideBar";
import s from "./AdminLayout.module.scss";

export const AdminLayout = () => {
  return (
    <div className={s.main}>
      <div className={s.main__left}>
        <SideBar />
      </div>
      <div className={s.main__right}>
        <Outlet />
      </div>
    </div>
  );
};
