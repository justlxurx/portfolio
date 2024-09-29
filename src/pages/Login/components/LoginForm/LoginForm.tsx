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
