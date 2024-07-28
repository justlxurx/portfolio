import { Outlet } from "react-router-dom";
import s from "./AdminLayout.module.scss";
import { ControlPanel } from "../ControlPanel/ControlPanel";

export const AdminLayout = () => {
  return (
    <div className={s.main}>
      <div className={s.left}>
        <ControlPanel />
      </div>

      <div className={s.right}>
        <Outlet />
      </div>
    </div>
  );
};
