import Responses from "../../components/Responses/index";
import MainForm from "../../components/MainForm/index";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

const FAQ = () => {
  return (
    <>
      <Header />
      {/* <div className={styles.mainFormSection}>
        <MainForm />
      </div> */}
      <Navbar />
      <Responses />
      <Footer />
    </>
  );
};

export default FAQ;
