import { ReactNode } from "react";
import s from "./Input.module.scss";

export const Input = ({ children }: { children: ReactNode }) => {
  return (
    <section className={s.main}>
      <input type="number" placeholder="0" />
      {children}
    </section>
  );
};
