import { DashboardSection } from "../../components/Dashboard/DashboardSection";
import { Header } from "../../components/Header/Header";
import s from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div className={s.wrap}>
      <Header />
      <DashboardSection />
    </div>
  );
};
