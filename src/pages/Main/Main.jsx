import React from 'react';
import MainForm from '../../components/MainForm/index';
import AboutUs from '../../components/AboutUs/index';
import Works from '../../components/Works/index';
import CanHelp from '../../components/CanHelp/index';
import ClientsVisa from '../../components/ClientsVisa/index';
import Popular from '../../components/Popular/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <MainForm />
      <Popular />
      <AboutUs />
      <ClientsVisa />
      <Works />
      <CanHelp />
      <Footer />
    </>
  );
};

export default Main;
