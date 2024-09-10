import s from "./Distribute.module.scss";
import Input from "../../../../features/Input2/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

export const DistributeRewards = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      amount: "",
      file: File,
      rentProfit: "",
      maintenanceFee1: "",
      maintenanceFee2: "",
      netIncome: "",
    },
    validationSchema: Yup.object({
      amount: Yup.string().required(`Required`),
      //   file: Yup.().required(`Name is required`),
      rentProfit: Yup.string().required(`Required`),
      maintenanceFee1: Yup.string().required(`Required`),
      maintenanceFee2: Yup.string().required(`Required`),
      netIncome: Yup.string().required(`Required`),
    }),
    onSubmit: async (values) => {
      event?.preventDefault();
      //   const formattedValues = {
      //     token_price: Number(values.nftPrice),
      //     tokens_available: Number(values.nftQuantity),
      //     total_tokens: Number(values.nftQuantity),
      //     balconies: Number(values.balcon),
      //     bathrooms: Number(values.bath),
      //   };

      try {
        // const result = await managePropertyApi.update(id, formattedValues);
        alert("Property updated successfully");
      } catch (err) {
        console.error("Error when trying to create property:", err);
      }
    },
  });
  return (
    <div className={s.outer}>
      <div className={s.main}>
        <h1 className={s.main__title}> Distribute Rewards</h1>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          <Input
            value={formik.values.amount}
            title="Amount of rewards"
            placeholder="Amount of rewards"
            type="text"
            name="amount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="black"
            inputColor="rgba(29, 29, 29, 0.35)"
            className={s.mainForm__input}
            textClassName={s.labelName}
            borderColor={
              formik.touched.amount && formik.errors.amount ? "red" : ""
            }
          />
          <Input
            value={formik.values.file}
            title="Upload P&L:"
            placeholder="Upload P&L:"
            type="file"
            name="file"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="black"
            inputColor="rgba(29, 29, 29, 0.35)"
            className={s.mainForm__input}
            textClassName={s.labelName}
            borderColor={formik.touched.file && formik.errors.file ? "red" : ""}
          />
          <Input
            value={formik.values.rentProfit}
            title="Gros rent profit"
            placeholder="Gros rent profit"
            type="text"
            name="rentProfit"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="black"
            inputColor="rgba(29, 29, 29, 0.35)"
            className={s.mainForm__input}
            textClassName={s.labelName}
            borderColor={
              formik.touched.rentProfit && formik.errors.rentProfit ? "red" : ""
            }
          />
          <Input
            value={formik.values.maintenanceFee1}
            title="Maintenance fee"
            placeholder="Maintenance fee"
            type="text"
            name="maintenanceFee1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="black"
            inputColor="rgba(29, 29, 29, 0.35)"
            className={s.mainForm__input}
            textClassName={s.labelName}
            borderColor={
              formik.touched.maintenanceFee1 && formik.errors.maintenanceFee1
                ? "red"
                : ""
            }
          />
          <Input
            value={formik.values.maintenanceFee2}
            title="Maintenance fee"
            placeholder="Maintenance fee"
            type="text"
            name="maintenanceFee2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="black"
            inputColor="rgba(29, 29, 29, 0.35)"
            className={s.mainForm__input}
            textClassName={s.labelName}
            borderColor={
              formik.touched.maintenanceFee2 && formik.errors.maintenanceFee2
                ? "red"
                : ""
            }
          />
          <Input
            value={formik.values.netIncome}
            title="Net income"
            placeholder="Net income"
            type="text"
            name="netIncome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="black"
            inputColor="rgba(29, 29, 29, 0.35)"
            className={s.mainForm__input}
            textClassName={s.labelName}
            borderColor={
              formik.touched.netIncome && formik.errors.netIncome ? "red" : ""
            }
          />

          <div className={s.buttonWrap}>
            <button className={s.cancelButton}>Distibute</button>
            <button onClick={closeModal} className={s.cancelButton}>
              {" "}
              Cancel{" "}
            </button>
            <button onClick={() => ""} className={s.saveButton} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
