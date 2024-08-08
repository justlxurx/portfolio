import s from "./MainForm.module.scss";
import { Input } from "../../../../features/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

export const MainForm = () => {
  const data = [
    {
      token: "10 tokens",
      usdt: "1.000 USDT",
    },
    {
      token: "25 tokens",
      usdt: "1.000 USDT",
    },
    {
      token: "50 tokens",
      usdt: "5.000 USDT",
    },
    {
      token: "100 tokens",
      usdt: "10.000 USDT",
    },
    {
      token: "250 tokens",
      usdt: "25.000 USDT",
    },
    {
      token: "500 tokens",
      usdt: "50.000 USDT",
    },
  ];
  //   const formik = useFormik({
  //     initialValues: {
  //       amount: 0,
  //     },
  //     validationSchema: Yup.object({
  //       amount: Yup.number()
  //         // .matches(/^(\d{1}-\d{3}-\d{3}-\d{2}-\d{2})$/, 'Only number')
  //         .required(),
  //     }),
  //     onSubmit: async (values) => {
  //       try {
  //          if (response.error) {
  //            console.error("Ошибка в ответе сервера:", response.error);
  //          } else {
  //            resetForm();
  //          }
  //       } catch (error) {
  //         console.error("Error submitting form:", error);
  //       }
  //     },
  //   });
  return (
    <div className={s.main}>
      <h1 className={s.main__heading}>Amount</h1>
      <div>
        <Input
          placeholder="Amount to buy"
          //   value={formik.values.amount}
          //   onChange={formik.handleChange}
        >
          <p className={s.input__text}>MAX</p>
        </Input>
      </div>
      <div className={s.wrap}>
        {data.map((item, index) => (
          <div key={index} className={s.block}>
            <input
              type="radio"
              name="token"
              id={`${index}`}
              value={item.token}
              className={s.block__input}
              defaultChecked={index === 0}
            />
            <label htmlFor={`${index}`} className={s.block__label}>
              {item.token} <br />
              {item.usdt}
            </label>
          </div>
        ))}
      </div>
      <button className={s.main__button}>BUY TOKENS</button>
    </div>
  );
};
