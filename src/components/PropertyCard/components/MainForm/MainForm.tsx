import s from "./MainForm.module.scss";
import { Input } from "../../../../features/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BalanceInfo } from "../BalanceInfo/BalanceInfo";
import { useState } from "react";

export const MainForm = ({ data }: { data: any }) => {
  const getOutputPosition = () => {
    const min = 0;
    const max = data.total_tokens;

    const sliderContainer = document.querySelector(`.${s.sliderWrap}`);
    const sliderContainerWidth = sliderContainer
      ? sliderContainer.clientWidth
      : 200;
    const sliderWidthPercent = 110;
    const thumbWidthPercent = 15;

    const sliderWidth = (sliderWidthPercent / 100) * sliderContainerWidth;
    const thumbWidth = (thumbWidthPercent / 100) * sliderContainerWidth;

    const position = ((value - min) / (max - min)) * (sliderWidth - thumbWidth);
    return position;
  };

  const [value, setValue] = useState(0);
  const [valueUsdt, setValueUsdt] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    setValueUsdt(newValue * data.token_price);
  };
  const getBackgroundStyle = () => {
    const percentage = (value / data.total_tokens) * 100;
    return {
      background: `linear-gradient(
        to right,
       rgba(190, 255, 107, 1)${percentage}%,  /* Левая часть */
       rgba(123, 189, 39, 0.11) ${percentage}%       /* Правая часть */
      )`,
    };
  };
  const soldTokens =
    ((data.total_tokens - data.tokens_available) * 100) / data.total_tokens;

  const formik = useFormik({
    initialValues: {
      amount: 0,
    },
    validationSchema: Yup.object({
      amount: Yup.number().positive("Only positive number").required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        alert("Sent successfully");
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <form className={s.main} onSubmit={formik.handleSubmit}>
      <BalanceInfo />
      <div className={s.form}>
        <div className={s.inputWrap}>
          <h1 className={s.main__heading}>Amount</h1>
          <Input
            name="amount"
            placeholder="0"
            value={formik.values.amount}
            onChange={formik.handleChange}
            style={{
              border:
                formik.touched.amount && formik.errors.amount
                  ? "1px solid red"
                  : "",
            }}
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
                  // left: `${getOutputPosition(value, 0, 500)}px`,
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
                max={data ? data.total_tokens : ""}
                value={value}
                onChange={handleChange}
                step={"1"}
                style={getBackgroundStyle()}
              />
              <p className={s.label}>shares</p>
            </div>
            <div className={s.slider}>
              <output
                className={s.output2}
                htmlFor="usdt"
                id="volume2"
                style={{
                  left: ` ${getOutputPosition()}px`,
                  transform: `${
                    valueUsdt == 0 ? "translateX(0%)" : " translateX(-50%)"
                  }`,
                }}
              >
                {valueUsdt}
              </output>
              <input
                type="range"
                id={s.usdt}
                min="0"
                max={data ? data.token_price * data.total_tokens : ""}
                value={valueUsdt}
                onChange={handleChange}
                step={"1"}
                style={getBackgroundStyle()}
                disabled
              />
              <p className={s.label}>USDT</p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={`${s.main__button} ${soldTokens == 100 && s.notAllow}`}
        disabled={soldTokens === 100}
      >
        BUY SHARES
      </button>
    </form>
  );
};
