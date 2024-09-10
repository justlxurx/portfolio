import s from "./Input.module.scss";
import { IInput } from "./Interface";

const Input = ({
  title,
  placeholder,
  type,
  name,
  updateInput,
  disabled = false,
  color,
  inputColor,
  className,
  textClassName,
  borderColor,
  ...rest
}: IInput) => {
  return (
    <div className={s.mainInput}>
      <label
        className={`${s.labelName} ${textClassName}`}
        style={{ color: `${color}` }}
      >
        {title}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) =>
          updateInput && updateInput(e.target.name, e.target.value)
        }
        name={name}
        {...rest}
        className={`${s.input} ${className}`}
        // style={disabled ? { cursor: "not-allowed" } : {}}
        // disabled={disabled}
        style={{
          color: `${inputColor}`,
          borderColor: `${borderColor} `,
        }}
      />
    </div>
  );
};
export default Input;
