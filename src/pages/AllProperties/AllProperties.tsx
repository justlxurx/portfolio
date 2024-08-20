import { Header } from "../../components/Header/Header";
import { Properties } from "./components/Main/Main";
import s from "./AllProperties.module.scss";

export const AllProperties = () => {
  return (
    <div className={s.outer}>
      <Header />
      <Properties />
    </div>
  );
};
