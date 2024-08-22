import { MainPage } from "../pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { AllProperties } from "../pages/AllProperties/AllProperties";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Property } from "../pages/Property/Property";
import { Register } from "../pages/Register/Register.";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<AllProperties />} />
        <Route path="/properties/:id" element={<Property />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
