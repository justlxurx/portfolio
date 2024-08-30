import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectAdminAuth } from "../../../../slice/adminAuthSlice";
import s from "./LoginForm.module.scss";
import Input from "../../../../features/Input2/Input";
import { Logo } from "../../../../assets/icons/logo";
import { useAppSelector } from "../../../../hooks/hooks";

export const LoginForm = () => {
  const [apiKey, setApiKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const isAuthenticated = useAppSelector(selectAdminAuth).isAuthenticated;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/properties");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(login(apiKey));
    setError("Wrong key");
  };

  return (
    <div className={s.main}>
      <div className={s.logo}>
        <Logo />
      </div>
      <form className={s.main__form} onSubmit={handleSubmit}>
        <Input
          title="Key"
          placeholder="Enter key"
          name="key"
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          required
        />
        {!isAuthenticated && <p className={s.errors}>{error}</p>}

        <button type="submit" className={s.main__formButton}>
          Log in
        </button>
      </form>
    </div>
  );
};

// import s from "./LoginForm.module.scss";
// import Input from "../../../../features/Input2/Input";
// import { Logo } from "../../../../assets/icons/logo";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export const LoginForm = () => {
//   const [apiKey, setApiKey] = useState("");

//   const handleSubmit = async (event: any) => {
//     event.preventDefault(); // Предотвращаем стандартное поведение формы

//     try {
//       const response = await fetch("https://estate.hotcode.kz", {
//         // Замените на ваш URL
//         method: "GET", // Или другой HTTP метод, если требуется
//         headers: {
//           "x-api-key": apiKey, // Передаем API-ключ в заголовке
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       setResponseData(data); // Устанавливаем данные в состояние
//       setError(null); // Очищаем ошибки
//     } catch (error) {
//       setError(error.message); // Устанавливаем сообщение об ошибке в состояние
//       setResponseData(null); // Очищаем данные
//     }
//   };

//   // const formik = useFormik({
//   //   initialValues: {
//   //     username: "",
//   //     password: "",
//   //   },
//   //   validationSchema: Yup.object({
//   //     username: Yup.string()
//   //       // .matches(/^[A-Za-zА-Яа-яЁё]+$/, ``)
//   //       .required(`Password is required`),
//   //     password: Yup.string()
//   //       // .matches(/^(\d{1}-\d{3}-\d{3}-\d{2}-\d{2})$/, "")
//   //       .required("Password is required"),
//   //   }),
//   //   onSubmit: async (values, { resetForm }) => {
//   //     try {
//   //       const response = ""; //await submitForm(values);
//   //       console.log(response);
//   //       // if (response.error) {
//   //       //   console.error("Ошибка в ответе сервера:", response.error);
//   //       // } else {
//   //       //   resetForm();
//   //       // }
//   //     } catch (error) {
//   //       console.error("Error submitting form:", error);
//   //     }
//   //   },
//   // });
//   return (
//     <div className={s.main}>
//       <div className={s.logo}>
//         <Logo />
//       </div>
//       <form className={s.main__form} onSubmit={handleSubmit}>
//         {/* <Input
//           title="Username"
//           placeholder="Username"
//           type="text"
//           name="username"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.errors.username && formik.touched.username && (
//           <p className={s.errors}>{formik.errors.username}</p>
//         )}

//         <Input
//           title="Password"
//           placeholder="Password"
//           type="password"
//           name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.errors.password && formik.touched.password && (
//           <p className={s.errors}>{formik.errors.password}</p>
//         )} */}
//         <Input
//           title="Key"
//           placeholder="Enter key"
//           name="key"
//           type="text"
//           value={apiKey}
//           onChange={(e) => setApiKey(e.target.value)} // Обновляем состояние при вводе
//           required
//         />

//         <Link to="/admin/properties">
//           <button
//             type="submit"
//             className={s.main__formButton}
//             // style={{
//             //   background:
//             //     Object.keys(formik.errors).length === 0 && formik.touched
//             //       ? "rgba(84, 126, 208, 1)"
//             //       : "#747474",
//             // }}
//           >
//             Log in
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// };
