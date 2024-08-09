import s from "./Main.module.scss";
import { MainForm } from "./components/MainForm/MainForm";
import { Info } from "./components/Info/Info";
import { SliderSection } from "./components/Slider/Slider";

export const Main = () => {
  return (
    <>
      <div className={`${s.main} container`}>
        <div className={s.main__left}>
          <SliderSection />
        </div>
        <div className={s.main__right}>
          <MainForm />
          <Info />
        </div>
      </div>
    </>
  );
};
