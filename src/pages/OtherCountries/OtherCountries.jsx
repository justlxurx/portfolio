import React from 'react';
import MainForm from '../../components/MainForm/index';
import CanHelp from '../../components/CanHelp/index';
import OtherCountry from '../../components/OtherCountry/index';
import styles from './styles.module.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Visa from "./pages/Visa/Visa";

const Countries = () => {
  return (
    <>
      <Header />
      <div className={styles.mainFormSection}>
        <MainForm />
      </div>
     
      <OtherCountry />
      <CanHelp />
      <Footer />
    </>
  );
};
export default Countries;
