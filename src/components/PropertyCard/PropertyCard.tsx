import s from "./PropertyCard.module.scss";
import { MainForm } from "./components/MainForm/MainForm";
import { Info } from "./components/Info/Info";
import { SliderSection2 } from "./components/Slider2/Slider2";
import { useEffect, useState } from "react";
import { managePropertyApi } from "../../api/property/manageProperty";
import { useLocation } from "react-router-dom";

export const PropertyCard = () => {
  const location = useLocation().pathname;
  const parts = location.split("/");
  const id = Number(parts.pop() || "");

  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await managePropertyApi.get(id);
        setData(res);
        console.log("Getting data " + res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <div className={`${s.main} container`}>
        <div className={s.main__left}>
          <SliderSection2 id={id} data={data} />
          <Info />
        </div>
        <div className={s.main__right}>
          <MainForm />
        </div>
      </div>
    </>
  );
};
