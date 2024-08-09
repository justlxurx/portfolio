import { useState } from "react";
import s from "./Input.module.scss";
import { IInput } from "./Interface";
// import { EyeIcon } from "../../assets/icons/eye";
// import { HiddenIcon } from "../../assets/icons/hidden";

const Input = ({
  title,
  placeholder,
  type,
  name,
  updateInput,
  disabled = false,
  ...rest
}: IInput) => {
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
        onChange={(e) =>
          updateInput && updateInput(e.target.name, e.target.value)
        }
        name={name}
        {...rest}
        className={s.input}
        style={disabled ? { cursor: "not-allowed" } : {}}
        disabled={disabled}
      />
    </div>
  );
};
export default Input;
