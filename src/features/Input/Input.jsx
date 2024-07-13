import { useState } from "react";
import s from "./Input.module.scss";
// import { EyeIcon } from '../../assets/icons/eye';
// import { HiddenIcon } from '../../assets/icons/hidden';

const Input = ({
  title,
  placeholder,
  type,
  name,
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
