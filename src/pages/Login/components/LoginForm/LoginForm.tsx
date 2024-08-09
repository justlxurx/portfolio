import Input from "../Input/Input";
import s from "./LoginForm.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      verifyPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          `Invalid email`
        )
        .required(`Email is required`),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
          "Must be 8-20 characters long, with at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character."
        )
        .required("Password is required"),
      verifyPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      //   try {
      //     if (response.error) {
      //       console.error("Ошибка в ответе сервера:", response.error);
      //     } else {
      //       resetForm();
      //     }
      //   } catch (error) {
      //     console.error("Error submitting form:", error);
      //   }
      alert("Submitted successfully");
    },
  });
  return (
    <div className={s.main}>
      <h1 className={s.main__heading}>Sign In/ Log in</h1>
      <form className={s.loginForm} onSubmit={formik.handleSubmit}>
        <div className={s.input}>
          <Input
            title="E-mail"
            placeholder="Enter your e-mail"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={s.error}>{formik.errors.email}</div>
          )}
        </div>
        <div className={s.input}>
          <Input
            title="Password"
            placeholder="Enter password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={s.error}>{formik.errors.password}</div>
          )}
        </div>
        <div className={s.input}>
          <Input
            title="Verify password"
            placeholder="Verify password"
            name="verifyPassword"
            value={formik.values.verifyPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.verifyPassword && formik.errors.verifyPassword && (
            <div className={s.error}>{formik.errors.verifyPassword}</div>
          )}
        </div>
        <button
          className={s.loginForm__button}
          type="submit"
          style={{
            background:
              Object.keys(formik.errors).length > 0
                ? " rgba(255, 255, 255, 0.45)"
                : "white",
            color:
              Object.keys(formik.errors).length > 0
                ? " rgba(255, 255, 255, 0.45)"
                : "rgba(24, 39, 67, 1)",
          }}
        >
          Sign in/ Log in
        </button>
      </form>
    </div>
  );
};
