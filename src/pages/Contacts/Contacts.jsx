import React from "react";
import MainForm from "../../components/MainForm/index";
import ContactUs from "../../components/ContactUs/index";
import styles from "./styles.module.scss";

const Countries = () => {
  return (
    <>
      <div className={styles.mainFormSection}>
        <MainForm />
      </div>
      <ContactUs />
    </>
  );
};
export default Countries;
