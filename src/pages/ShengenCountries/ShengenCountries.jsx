import React from "react";
import CanHelp from "../../components/CanHelp/index";
import Shengen from "../../components/Shengen";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
const Countries = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Shengen />
      <CanHelp />
      <Footer />
    </>
  );
};
export default Countries;
