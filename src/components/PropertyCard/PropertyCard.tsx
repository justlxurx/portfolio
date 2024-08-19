import s from "./PropertyCard.module.scss";
import { MainForm } from "./components/MainForm/MainForm";
import { Info } from "./components/Info/Info";
import { SliderSection2 } from "./components/Slider2/Slider2";

export const PropertyCard = () => {
  return (
    <>
      <div className={`${s.main} container`}>
        <div className={s.main__left}>
          <SliderSection2 />
          <Info />
        </div>
        <div className={s.main__right}>
          <MainForm />
        </div>
      </div>
    </>
  );
};
