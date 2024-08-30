import "./global.scss";
import { MainRoutes } from "./routes/MainRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../src/hooks/hooks.ts";
import { authSelect } from "../src/slice/authSlice.ts";
import { selectAdminAuth } from "./slice/adminAuthSlice.ts";

const App = () => {
  const adminAuth = useAppSelector(selectAdminAuth).isAuthenticated;

  const auth = useAppSelector(authSelect).isAuthorized;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/login" && auth) {
      navigate("/dashboard");
    } else if (path === "/dashboard" && !auth) {
      navigate("/login");
    }
    if (
      (path === "/admin/properties" ||
        path === "/admin/properties/create-new") &&
      !adminAuth
    ) {
      navigate("/admin/login");
    }
    if (path === "/admin/login" && adminAuth) {
      navigate("/admin/properties");
    }
  }, [location, navigate, auth, adminAuth]);
  return (
    <>
      <MainRoutes />
    </>
  );
};

export default App;
