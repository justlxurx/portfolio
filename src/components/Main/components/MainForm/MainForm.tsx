import s from "./MainForm.module.scss";
import { Input } from "../../../../features/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BalanceInfo } from "../BalanceInfo/BalanceInfo";
import { useState } from "react";

export const MainForm = () => {
  const getOutputPosition = () => {
    const min = 0;
    const max = 500;

    const sliderContainer = document.querySelector(`.${s.sliderWrap}`);
    const sliderContainerWidth = sliderContainer
      ? sliderContainer.clientWidth
      : 200;
    const sliderWidthPercent = 110;
    const thumbWidthPercent = 15;

    const sliderWidth = (sliderWidthPercent / 100) * sliderContainerWidth; // Переводим в пиксели
    const thumbWidth = (thumbWidthPercent / 100) * sliderContainerWidth; // Переводим в пиксели

    const position = ((value - min) / (max - min)) * (sliderWidth - thumbWidth);
    return position;
  };

  const [value, setValue] = useState(0);
  const [valueUsdt, setValueUsdt] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    setValueUsdt(newValue * 100);
  };
  const getBackgroundStyle = () => {
    const percentage = (value / 500) * 100; // Вычисляем процент заполнения
    return {
      background: `linear-gradient(
        to right,
        rgba(84, 126, 208, 1)${percentage}%,  /* Левая часть */
        rgba(84, 126, 208, 0.15) ${percentage}%       /* Правая часть */
      )`,
    };
  };
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
      <BalanceInfo />

      <div className={s.inputWrap}>
        <h1 className={s.main__heading}>Amount</h1>
        <Input
          placeholder="Amount to buy"
          //   value={formik.values.amount}
          //   onChange={formik.handleChange}
        >
          <p className={s.input__text}>MAX</p>
        </Input>
      </div>
      <div className={s.wrap}>
        <div className={s.sliderWrap}>
          <div className={s.slider}>
            <output
              className={s.output1}
              htmlFor="tokens"
              id="volume"
              style={{
                left: `${getOutputPosition()}px`,
                transform: `${
                  value == 0 ? "translateX(0%)" : " translateX(-50%)"
                }`,
              }}
            >
              {value}
            </output>
            <input
              type="range"
              id={s.tokens}
              min="0"
              max={"500"}
              value={value}
              onChange={handleChange}
              step={"1"}
              style={getBackgroundStyle()}
            />
            <p className={s.label}>tokens</p>
          </div>
          <div className={s.slider}>
            <output
              className={s.output2}
              htmlFor="usdt"
              id="volume2"
              style={{
                left: ` ${getOutputPosition()}px`,
                transform: `${
                  value == 0 ? "translateX(0%)" : " translateX(-50%)"
                }`,
              }}
            >
              {valueUsdt}
            </output>
            <input
              type="range"
              id={s.usdt}
              min="0"
              max={"50000"}
              value={valueUsdt}
              onChange={handleChange}
              step={"1"}
              style={getBackgroundStyle()}
              disabled
            />
            <p className={s.label}>usdt</p>
          </div>
        </div>
      </div>
      <button className={s.main__button}>BUY TOKENS</button>
    </div>
  );
};
