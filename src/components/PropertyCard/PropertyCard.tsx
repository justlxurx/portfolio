import s from "./PropertyCard.module.scss";
import { MainForm } from "./components/MainForm/MainForm";
import { Info } from "./components/Info/Info";
import { SliderSection2 } from "./components/Slider2/Slider2";
import { useEffect, useState } from "react";
import { managePropertyApi } from "../../api/property/manageProperty";
import { useLocation } from "react-router-dom";
import { Timeline } from "./components/Timeline/Timeline";
import { Documents } from "./components/Documents/Documents";

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
          <SliderSection2 id={id} data={data ? data : ""} />
          <Info id={id} data={data ? data : ""} />
          <div className={s.mobileForm}>
            <MainForm data={data ? data : ""} />
          </div>
          <Timeline />
          <Documents />
        </div>
        <div className={s.main__right}>
          <MainForm data={data ? data : ""} />
        </div>
      </div>
    </>
  );
};
