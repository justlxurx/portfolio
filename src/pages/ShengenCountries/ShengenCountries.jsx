import React from "react";
import MainForm from "../../components/MainForm/index";
import CanHelp from "../../components/CanHelp/index";
import Shengen from "../../components/Shengen";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
const Countries = () => {
  return (
    <>
      <Header />
      {/* <div className={styles.mainFormSection}>
        <MainForm />
      </div> */}
      <Navbar />
      <Shengen />
      <CanHelp />
      <Footer />
    </>
  );
};
export default Countries;
