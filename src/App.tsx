import "./global.scss";
import { MainRoutes } from "./routes/MainRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAppSelector } from "../src/hooks/hooks.ts";
import { authSelect } from "../src/slice/authSlice.ts";

const App = () => {
  const auth = useAppSelector(authSelect);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/dashboard" && !auth.isAuthorized) {
      navigate("/login");
    } else if (path === "/login" && auth.isAuthorized) {
      navigate("/dashboard");
    }
  }, [location, navigate]);
  return (
    <>
      <MainRoutes />
    </>
  );
};

export default App;
