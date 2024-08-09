import { MainPage } from "../pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
