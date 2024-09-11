import Input from "../Input/Input";
import s from "./Exchange.module.scss";
import btc from "../../../../assets/icons/btc.svg";
import eth from "../../../../assets/icons/eth.svg";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Exchange = () => {
  // const [sendVal, setSendVal] = useState(0);
  const [receiveVal, setReceiveVal] = useState(0);

  const formik = useFormik({
    initialValues: {
      sendVal: 0,
    },
    validationSchema: Yup.object({
      sendVal: Yup.number().positive("Only positive number").required(),
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
    <div className={s.exchange}>
      <h3 className={s.exchange__title}>Exchange</h3>
      <div className={s.exchange__content}>
        <form className={s.exchange__form} onSubmit={formik.handleSubmit}>
          <Input
            title="You Send"
            name="sendVal"
            img={btc}
            text="btc"
            type="number"
            value={formik.values.sendVal}
            onChange={formik.handleChange}
            placeholder="0"
            border={
              formik.touched.sendVal && formik.errors.sendVal
                ? "1px solid red"
                : ""
            }
            // color={formik.touched.sendVal && formik.errors.sendVal ? "red" : ""}
          />
          <Input
            title="You Receive"
            name="receiveVal"
            img={eth}
            text="eth"
            type="number"
            value={receiveVal}
            onChange={(e) => setReceiveVal(e.target.value)}
            placeholder="0"
          />
          <p className={s.exchange__currentRate}>
            <span>Current Rate:</span> 1 BTC = 23.8297381 ETH
          </p>
          <button className={s.exchange__button} type="submit">
            Exchange
          </button>
        </form>
      </div>
    </div>
  );
};
