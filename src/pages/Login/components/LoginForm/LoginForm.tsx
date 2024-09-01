import s from "./LoginForm.module.scss";
import connect from "../../../../assets/icons/connect.svg";
import metamask from "../../../../assets/icons/metamask.svg";
import { useCallback, useState } from "react";
import { useProcesses } from "../../../../processes/Processes";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { authSelect } from "../../../../slice/authSlice";
import { useAppSelector } from "../../../../hooks/hooks";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { address } = useWeb3ModalAccount();
  const [isProcessing, setIsProcessing] = useState(false);
  const { processAuth } = useProcesses();

  const navigate = useNavigate();
  const auth = useAppSelector(authSelect).isAuthorized;

  const handleLogin = useCallback(async () => {
    if (address) {
      setIsProcessing(true);
      try {
        await processAuth();
        console.log("User successfully logged in or registered" + auth);
        // if (auth) {
        //   navigate("/dashboard");
        // }
        // window.location.href = "/dashboard";
      } catch (err) {
        console.error("Login/registration failed:", err);
      } finally {
        setIsProcessing(false);
      }
    } else {
      alert("You must connect wallet, then try again ");
    }
  }, [processAuth]);

  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__heading}>Sign In / Log In</h1>
      <div className={s.buttons}>
        <div className={s.buttons__wrap}>
          <button
            className={s.buttons__item}
            onClick={handleLogin}
            disabled={isProcessing}
          >
            <img src={metamask} alt="metamask" />
            {isProcessing ? "Processing..." : "Continue with MetaMask"}
          </button>
          <button className={s.buttons__item} disabled={isProcessing}>
            <img src={connect} alt="connect wallet" />
            Continue with Wallet Connect
          </button>
        </div>
      </div>
    </div>
  );
};

// import s from "./LoginForm.module.scss";
// // import Input from "../Input/Input";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import google from "../../../../assets/icons/google.svg";
// import apple from "../../../../assets/icons/apple.svg";
// import connect from "../../../../assets/icons/connect.svg";

// export const LoginForm = () => {

//   // const onInit = (auth2: gapi.auth2.GoogleAuth) => {
//   //   console.log("init OK", auth2);
//   // };

//   // const onError = (err: any) => {
//   //   console.log("error", err);
//   // };

//   // window.gapi.load("auth2", () => {
//   //   window.gapi.auth2
//   //     .init({
//   //       client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
//   //     })
//   //     .then(onInit, onError);
//   // });

//   // const signIn = () => {
//   //   const auth2 = window.gapi.auth2.getAuthInstance();
//   //   auth2.signIn().then((googleUser: gapi.auth2.GoogleUser) => {
//   //     const profile = googleUser.getBasicProfile();
//   //     console.log("ID: " + profile.getId());
//   //     console.log("Full Name: " + profile.getName());
//   //     console.log("Given Name: " + profile.getGivenName());
//   //     console.log("Family Name: " + profile.getFamilyName());
//   //     console.log("Image URL: " + profile.getImageUrl());
//   //     console.log("Email: " + profile.getEmail());

//   //     const id_token = googleUser.getAuthResponse().id_token;
//   //     console.log("ID Token: " + id_token);

//   //     // Здесь можно отправить токен на сервер для аутентификации
//   //   });
//   // };

//   // const signOut = () => {
//   //   const auth2 = window.gapi.auth2.getAuthInstance();
//   //   auth2.signOut().then(function () {
//   //     console.log("User signed out.");
//   //   });
//   // };
//   // const formik = useFormik({
//   //   initialValues: {
//   //     email: "",
//   //     // password: "",
//   //     // verifyPassword: "",
//   //   },
//   //   validationSchema: Yup.object({
//   //     email: Yup.string()
//   //       .matches(
//   //         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//   //         `Invalid email`
//   //       )
//   //       .required(`Email is required`),
//   //     // password: Yup.string()
//   //     //   .matches(
//   //     //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
//   //     //     "Must be 8-20 characters long, with at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character."
//   //     //   )
//   //     //   .required("Password is required"),
//   //     // verifyPassword: Yup.string()
//   //     //   .oneOf([Yup.ref("password"), ""], "Passwords must match")
//   //     //   .required("Please confirm your password"),
//   //   }),
//   //   onSubmit: async (values) => {
//   //     //   try {
//   //     //     if (response.error) {
//   //     //       console.error("Ошибка в ответе сервера:", response.error);
//   //     //     } else {
//   //     //       resetForm();
//   //     //     }
//   //     //   } catch (error) {
//   //     //     console.error("Error submitting form:", error);
//   //     //   }
//   //     alert("Submitted successfully");
//   //     window.location.href = "/dashboard";
//   //   },
//   // });
//   return (
//     <div className={`${s.main} container`}>
//       <h1 className={s.main__heading}>Sign In/ Log in</h1>
//       {/* <form className={s.loginForm} onSubmit={formik.handleSubmit}>
//         <div className={s.input}>
//           <Input
//             title="E-mail"
//             placeholder="Enter your e-mail"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className={s.error}>{formik.errors.email}</div>
//           )}
//         </div>
//         <button
//           className={s.loginForm__button}
//           type="submit"
//           style={{
//             background:
//               Object.keys(formik.errors).length > 0
//                 ? " rgba(255, 255, 255, 0.45)"
//                 : " rgba(84, 126, 208, 1)",
//             color:
//               Object.keys(formik.errors).length > 0
//                 ? " rgba(255, 255, 255, 0.45)"
//                 : "white",
//           }}
//         >
//           Continue with E-mail
//         </button>
//       </form> */}
//       {/* <div className={s.orWrap}>
//         <hr /> OR <hr />
//       </div> */}
//       <div className={s.buttons}>
//         {/* <button className={`${s.buttons__item}`} onClick={signIn}>
//           <img src={google} alt="google" />
//           Continue with Google account
//         </button> */}
//         {/* <button className={s.buttons__item}>
//           <img src={apple} alt="apple" />
//           Continue with Apple account
//         </button> */}
//         <div className={s.buttons__wrap}>
//           <button className={s.buttons__item} onClick={handleLoginMetamask}>
//             <img src={metamask} alt="metamask" />
//             Continue with MetaMask
//           </button>
//           <button className={s.buttons__item}>
//             <img src={connect} alt="connect wallet" />
//             Continue with Wallet Connect
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
