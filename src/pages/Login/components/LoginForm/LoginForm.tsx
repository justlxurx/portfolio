import s from "./LoginForm.module.scss";
import connect from "../../../../assets/icons/connect.svg";
import metamask from "../../../../assets/icons/metamask.svg";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useGetNonceQuery } from "../../../../service";
import { useState } from "react";
import { ethers } from "ethers";

export const LoginForm = () => {
  const { address } = useWeb3ModalAccount();
  const [nonce, setNonce] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const fetchNonce = async () => {
    if (!address) return;

    const response = await fetch(
      `https://estate.hotcode.kz/user/nonce/${address}`
    );
    const data = await response.json();
    setNonce(data.nonce);
  };

  const handleSignMessage = async (nonce: string) => {
    if (!address) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const message = `I am signing my one-time nonce: ${nonce}`;
    const signature = await signer.signMessage(message);

    return { address, signature };
  };

  const handleAuthenticate = async ({
    address,
    signature,
  }: {
    address: string;
    signature: string;
  }) => {
    const response = await fetch(`https://estate.hotcode.kz/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicAddress: address, signature }),
    });
    const result = await response.json();
    console.log("Authentication result:", result);
  };

  const handleRegister = async () => {
    if (!address) return;

    const response = await fetch(`https://estate.hotcode.kz/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wallet_address: address.toLowerCase(),
        email,
        first_name: firstName,
        last_name: lastName,
      }),
    });
    const result = await response.json();
    console.log("User registered:", result);
    setIsRegistered(true);
  };

  const handleLogin = async () => {
    try {
      if (!address) return;

      const userResponse = await fetch(
        `https://estate.hotcode.kz/user/nonce/${address}`
      );
      const users = await userResponse.json();

      if (users.length === 0) {
        await handleRegister();
      } else {
        setIsRegistered(true);
      }

      if (isRegistered) {
        if (!nonce) {
          await fetchNonce();
        }

        if (nonce) {
          const { address, signature } = await handleSignMessage(nonce);
          await handleAuthenticate({ address, signature });
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__heading}>Sign In/ Log in</h1>
      <div className={s.buttons}>
        <div className={s.buttons__wrap}>
          <button className={s.buttons__item} onClick={handleLogin}>
            <img src={metamask} alt="metamask" />
            Continue with MetaMask
          </button>
          <button className={s.buttons__item}>
            <img src={connect} alt="connect wallet" />
            Continue with Wallet Connect
          </button>
        </div>
      </div>
      {/* {!isRegistered ? (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>Welcome, {address}</div>
      )} */}
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
