import s from "./Main.module.scss";
// import { LogoDoggy } from "../../assets/icons/logo_doggy";
import { Header } from "../Header/Header";
import { Wallet } from "./components/Wallet/Wallet";
// import { useState } from "react";
// import { Modal } from "./components/Modal/Modal";
import logo from "../../assets/images/logo_white.svg";

export const Main = () => {

  // const [showModal, setShowModal] = useState(false);
  //
  // const handleShowModal = () => {
  //   setShowModal(true);
  // };
  //
  // const handleExitModal = () => {
  //   setShowModal(false);
  // };

  return (
    <section className={`${s.main} ${s.container}`}>
      <Header />
      <div className={s.main__content}>
        <div className={s.main__heading}>
          <img src={logo} alt="logo" className={s.logo} />
          {/* <LogoDoggy /> */}
          <p className={s.main__text}>The Future of Trading</p>
        </div>
        <div className={s.main__wallet}>
          <Wallet />
        </div>
      </div>
      {/*{showModal && <Modal exit={handleExitModal} />}*/}
    </section>
  );
};
