import { Faq } from "../../components/Faq/Faq";
import { Contacts } from "../../components/Contacts/Contacts";
import { Header } from "../../components/Header/Header";
import { Invest } from "../../components/Invest/Invest";
import { Main } from "../../components/Main/Main";
import { Steps } from "../../components/Steps/Steps";
import { MainSlider } from "../../components/MainSlider/MainSlider";
import s from "./Main.module.scss";

export const MainPage = () => {
  return (
    <div className={s.wrap}>
      <Header />
      <Main />
      <Invest />
      <Steps />
      <MainSlider />
      <Faq />
      <Contacts />
    </div>
  );
};
