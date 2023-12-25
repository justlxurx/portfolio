import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

const VisaTypes = () => {
  const [text, setText] = useState("Default text"); // Set your default text here
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick1 = (newText, buttonNumber) => {
    setText(newText);
    setActiveButton(buttonNumber);
  };

  // const handleButtonClick2 = (newText, buttonNumber) => {
  //   setText(newText);
  // };

  // const handleButtonClick3 = (newText, buttonNumber) => {
  //   setText(newText);
  // };

  return (
    <section className={styles.visa_types}>
      <div className={styles.visa_types_buttons}>
        <button
          onClick={() => handleButtonClick1("ГОСТЕВАЯ ВИЗА В АВСТРАЛИЮ", 1)}
          style={{
            backgroundColor:
              activeButton === 1 ? "rgba(50, 52, 154, 0.28)" : "#32349a",
          }}
        >
          ГОСТЕВАЯ ВИЗА В АВСТРАЛИЮ
        </button>
        <button
          onClick={() => handleButtonClick1("ДЕЛОВАЯ ВИЗА В АВСТРАЛИЮ", 2)}
          style={{
            backgroundColor:
              activeButton === 2 ? "rgba(50, 52, 154, 0.28)" : "#32349a",
          }}
        >
          ДЕЛОВАЯ ВИЗА В АВСТРАЛИЮ
        </button>
        <button
          style={{
            backgroundColor:
              activeButton === 3 ? "rgba(50, 52, 154, 0.28)" : "#32349a",
          }}
          onClick={() =>
            handleButtonClick1("ТУРИСТИЧЕСКАЯ ВИЗА В АВСТРАЛИЮ", 3)
          }
        >
          ТУРИСТИЧЕСКАЯ ВИЗА В АВСТРАЛИЮ
        </button>
      </div>
      <div className={styles.visa_types_text}>{text}</div>
    </section>
  );
};
export default VisaTypes;
