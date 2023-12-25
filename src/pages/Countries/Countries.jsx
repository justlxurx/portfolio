import React from "react";
import MainForm from "../../components/MainForm/index";
import CanHelp from "../../components/CanHelp/index";
import Country from "../../components/Country/index";
import styles from "./styles.module.scss";

const Countries = () => {
  return (
    <>
      <div className={styles.mainFormSection}>
        <MainForm />
      </div>
      <Country />
      <CanHelp />
    </>
  );
};
export default Countries;
