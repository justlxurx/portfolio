import { Header } from "../../components/Header/Header";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { lazy, Suspense } from "react";

// const Processes = lazy(() => import("../../processes/Processes"));

export const Login = () => {
  return (
    <>
      <Header />
      <LoginForm />
      {/* <Suspense fallback={null}>
        <Processes />
      </Suspense> */}
    </>
  );
};
