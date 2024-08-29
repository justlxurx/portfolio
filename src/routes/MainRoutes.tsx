import { MainPage } from "../pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { AllProperties } from "../pages/AllProperties/AllProperties";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Property } from "../pages/Property/Property";
import { LoginForm } from "../pages/Admin/Login/LoginForm/LoginForm";
import { AdminLayout } from "../layouts/AdminLayout/AdminLayout";
import { AdminProperties } from "../pages/Admin/Properties/Properties";
import { CreateNewProp } from "../pages/Admin/CreateNewProp/CreateNewProp";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/properties" element={<AllProperties />} />
      <Route path="/properties/:id" element={<Property />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin/login" element={<LoginForm />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/properties" element={<AdminProperties />} />
      </Route>
      <Route path="/admin/properties/create-new" element={<CreateNewProp />} />
    </Routes>
  );
};
