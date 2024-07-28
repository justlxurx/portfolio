import React from "react";
import CanHelp from "../../components/CanHelp/index";
import CountryVisa from "../../components/CountryVisa/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <CountryVisa />
      <CanHelp />
      <Footer />
    </>
  );
};

export default Main;
