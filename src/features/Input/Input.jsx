import s from "./Input.module.scss";

const Input = ({
  title,
  placeholder,
  type,
  name,
  error,
  ...rest
}) => {

  return (
    <div className={s.mainInput}>
      <label className={s.labelName}>{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...rest}
        className={s.input}
      />
      <p className={s.error}>{error ? error : ""}</p>
    </div>
  );
};
export default Input;
