import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Main from "./pages/Main/Main";
import Countries from "./pages/Countries/Countries";
import Visa from "./pages/Visa/Visa";
import Services from "./pages/Services/Services";
import FAQ from "./pages/FAQ/FAQ";
import VisaTypes from "./components/VisaTypes";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/shengen" element={<Countries />} />
        <Route path="/others" element={<Countries />} />
        <Route path="/germany" element={<Visa />} />
        <Route path="/visa_types" element={<VisaTypes />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
