import s from "./Properties.module.scss";
import { Card } from "../Card/Card";

export const Properties = () => {
  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__heading}>Properties</h1>
      <div className={s.links}>
        <a href="">All /</a> <a href="/active">Active</a>
      </div>
      <div className={s.main__content}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
