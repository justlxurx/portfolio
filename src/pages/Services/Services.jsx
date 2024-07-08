import MainForm from "../../components/MainForm/index";
import ServiceTypes from "../../components/ServiceTypes/index";
import CanHelp from "../../components/CanHelp/index";
import { Route, Routes } from "react-router-dom";
import { service } from "./services.data";
import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Services = () => {
  return (
    <>
      <Header />
      <div className={styles.mainFormSection}>
        <MainForm />
      </div>
      <Routes>
        {service.map(({ title, path, img, text, textEn, id, titleEn }) => (
          <Route
            key={id}
            path={path}
            element={
              <ServiceTypes
                title={title}
                text={text}
                img={img}
                id={id}
                textEn={textEn}
                titleEn={titleEn}
              />
            }
          />
        ))}
      </Routes>
      <div className={styles.helpSection}>
        <CanHelp />
      </div>
      <Footer />
    </>
  );
};

export default Services;
