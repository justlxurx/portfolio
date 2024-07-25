import MainForm from "../../components/MainForm/index";
import Comments from "../../components/Comments";
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
      <Comments />
      <Footer />
    </>
  );
};

export default FAQ;
