import s from "./Doc.module.scss";
import { Download } from "../../../../../assets/icons/download";

export const Doc = ({ title, link }: { title: string; link: string }) => {
  return (
    <a href={link}>
      <div className={s.main}>
        <h1 className={s.main__title}>{title}</h1>
        <Download />
      </div>
    </a>
  );
};
