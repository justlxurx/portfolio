import React, { ComponentPropsWithoutRef } from "react";
import s from "./Input.module.scss";

export const Input: React.FC<ComponentPropsWithoutRef<'input'>> = ({children, ...other}) => {
  return (
    <section className={s.main}>
      <input {...other} />
      {children}
    </section>
  );
};
