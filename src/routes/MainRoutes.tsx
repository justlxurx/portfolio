import { MainPage } from "../pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Property } from "../pages/Property/Property";
import { Dashboard } from "../pages/Dashboard/Dashboard";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
