import React from "react";
import MainForm from "../../components/MainForm/index";
import AboutUs from "../../components/AboutUs/index";
import Works from "../../components/Works/index";
import CanHelp from "../../components/CanHelp/index";
import ClientsVisa from "../../components/ClientsVisa/index";
import Popular from "../../components/Popular/index";
import BurgerMenu from "../../components/Burger";

const Main = () => {
  return (
    <>
      <MainForm />
      <Popular />
      <AboutUs />
      <ClientsVisa />
      <Works />
      <CanHelp />
    </>
  );
};

export default Main;
