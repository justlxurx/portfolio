import Responses from "../../components/Responses/index";
import MainForm from "../../components/MainForm/index";
import styles from "./styles.module.scss";

const FAQ = () => {
  return (
    <>
      <div className={styles.mainFormSection}>
        <MainForm />
      </div>

      <Responses />
    </>
  );
};

export default FAQ;
