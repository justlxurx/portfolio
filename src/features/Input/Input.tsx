import { ComponentPropsWithRef, forwardRef } from "react";
import s from "./Input.module.scss";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input">
>(({ children, ...other }, ref) => {
  return (
    <section className={s.main}>
      <input ref={ref} {...other} type="number" />
      {children}
    </section>
  );
});
