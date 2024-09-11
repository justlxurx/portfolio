import { ComponentPropsWithRef, forwardRef } from "react";
import s from "./Input.module.scss";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input">
>(({ children, style, ...other }, ref) => {
  return (
    <section className={s.main} style={style}>
      <input ref={ref} {...other} type="number" />
      {children}
    </section>
  );
});
