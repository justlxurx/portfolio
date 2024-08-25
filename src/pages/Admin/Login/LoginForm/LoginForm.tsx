import s from "./LoginForm.module.scss";
import Input from "../../../../features/Input2/Input";
import { Logo } from "../../../../assets/icons/logo";
import { useFormik } from "formik";
import * as Yup from "yup";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        // .matches(/^[A-Za-zА-Яа-яЁё]+$/, ``)
        .required(`Password is required`),
      password: Yup.string()
        // .matches(/^(\d{1}-\d{3}-\d{3}-\d{2}-\d{2})$/, "")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = ""; //await submitForm(values);
        console.log(response);
        // if (response.error) {
        //   console.error("Ошибка в ответе сервера:", response.error);
        // } else {
        //   resetForm();
        // }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });
  return (
    <div className={s.main}>
      <div className={s.logo}>
        <Logo />
      </div>
      <form className={s.main__form} onSubmit={formik.handleSubmit}>
        <Input
          title="Username"
          placeholder="Username"
          type="text"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.username && formik.touched.username && (
          <p className={s.errors}>{formik.errors.username}</p>
        )}

        <Input
          title="Password"
          placeholder="Password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <p className={s.errors}>{formik.errors.password}</p>
        )}

        <button
          type="submit"
          className={s.main__formButton}
          style={{
            background:
              Object.keys(formik.errors).length === 0 && formik.touched
                ? "rgba(84, 126, 208, 1)"
                : "#747474",
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
};
