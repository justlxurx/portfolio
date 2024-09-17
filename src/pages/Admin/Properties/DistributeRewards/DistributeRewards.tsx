import s from "./Distribute.module.scss";
import Input from "../../../../features/Input2/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import UploadImg from "../../../../features/UploadImg/UploadImg";
import type { UploadFile, UploadProps } from "antd";
import type { DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { Gift } from "../../../../assets/icons/gift";
import a from "../../../../assets/images/img1.png";

export const DistributeRewards = ({
  closeModal,
  img,
  title,
}: {
  closeModal: () => void;
  img?: string;
  title: string;
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
  // const [openDistributeRew, setOpenDistributeRew] = useState(false);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    // if (newFileList.length > 0) {
    //   const latestFile = newFileList[newFileList.length - 1].originFileObj;
    //   if (latestFile) {
    //     const fileUrl = URL.createObjectURL(latestFile);
    //     setMainImg(fileUrl);
    //   }
    // }
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id);
        const overIndex = prev.findIndex((i) => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  console.log("img is: " + img);

  return (
    <div className={s.outer}>
      <div className={s.main}>
        <h1 className={s.main__title}> Distribute Rewards</h1>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          {img ? (
            <div className={s.form__inputWrap}>
              <div className={s.form__img}>
                <p>{title}</p>
                <img src={img} alt="img" />
              </div>

              <div className={s.form__inputs}>
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
                <p className={s.uploadTitle}>Upload P&L:</p>
                <div className={s.uploadWrap}>
                  <UploadImg
                    onChange={onChange}
                    onDragEnd={onDragEnd}
                    fileList={fileList}
                    text="Upload P&L"
                    className={s.upload}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className={s.form__inputs}>
              <p className={s.title}>{title}</p>
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
              <p className={s.uploadTitle}>Upload P&L:</p>
              <div className={s.uploadWrap}>
                <UploadImg
                  onChange={onChange}
                  onDragEnd={onDragEnd}
                  fileList={fileList}
                  text="Upload P&L"
                  className={s.upload}
                />
              </div>
            </div>
          )}
          {/* <div className={s.form__inputWrap}>
            <div className={s.form__img}>
              <p>{title}</p>
              <img src={img} alt="img" />
            </div>

            <div className={s.form__inputs}>
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
              <p className={s.uploadTitle}>Upload P&L:</p>
              <div className={s.uploadWrap}>
                <UploadImg
                  onChange={onChange}
                  onDragEnd={onDragEnd}
                  fileList={fileList}
                  text="Upload P&L"
                  className={s.upload}
                />
              </div>
            </div>
          </div> */}
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
            <button onClick={closeModal} className={s.cancelButton}>
              Cancel
            </button>
            <button onClick={() => ""} className={s.saveButton} type="submit">
              <Gift color="white" size="17.25" />
              Distibute
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
