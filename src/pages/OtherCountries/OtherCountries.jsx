import React from "react";
import CanHelp from "../../components/CanHelp/index";
import OtherCountry from "../../components/OtherCountry/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

const Countries = () => {
  return (
    <>
      <Header />
      <Navbar />
      <OtherCountry />
      <CanHelp />
      <Footer />
    </>
  );
};
export default Countries;
