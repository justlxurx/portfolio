import s from "./Input.module.scss";
import { IInput } from "./Interface";
import arrow from "../../../../assets/icons/arrow.svg";

const Input = ({
  title,
  name,
  updateInput,
  className,
  img,
  text,
  border,
  color,
  ...rest
}: IInput) => {
  return (
    <div className={s.info} style={{ border: border }}>
      <div className={s.info__wrap}>
        <p className={s.info__title}>{title}:</p>
        <input
          onChange={(e) =>
            updateInput && updateInput(e.target.name, e.target.value)
          }
          name={name}
          {...rest}
          className={`${s.input} ${className}`}
          style={{ color: color }}
        />
      </div>
      <div className={s.wallet}>
        <img src={img} alt="btc" className={s.wallet__img} />
        <p className={s.wallet__text}>{text}</p>
        <img src={arrow} alt="down arrow" className={s.down} />
      </div>
    </div>
  );
};
export default Input;
