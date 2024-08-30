import s from "./DashboardSection.module.scss";
import { Card } from "../Card/Card";
import { SearchBar } from "../../features/SearchBar/SearchBar";
import { Down } from "../../assets/icons/Down";
import { Info } from "./components/Info/Info";
import { useState } from "react";
import { HistoryCard } from "./components/HistoryCard/HistoryCard";

export const DashboardSection = () => {
  const [openHistory, setOpenHistory] = useState(false);
  const item = [
    {
      title: "Name",
    },
    {
      title: "Desc",
    },
  ];
  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__heading}>Dashboard</h1>
      <div className={s.main__wrap}>
        <Info />
        <div className={s.main__right}>
          <div className={s.main__titleWrap}>
            <button onClick={() => setOpenHistory(false)}>
              <p
                className={s.main__title}
                style={{
                  color: !openHistory ? "white" : "rgba(185, 185, 185, 1)",
                }}
              >
                Your Properties /
              </p>
            </button>
            <button onClick={() => setOpenHistory(true)}>
              <p
                className={s.main__title}
                style={{
                  color: openHistory ? "white" : "rgba(185, 185, 185, 1)",
                }}
              >
                History
              </p>
            </button>
          </div>
          <div className={s.main__searching}>
            <div className={s.searchBar}>
              <SearchBar handleChange={() => ""} val="val" />
            </div>
            <div className={s.dropdown}>
              <div className={s.dropdown__top}>
                Sort by
                <Down />
              </div>
              <div className={s.dropdown__bottom}>
                {item.map((a, index) => (
                  <button className={s.dropdown__botton} key={index}>
                    {a.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {!openHistory ? (
            <div className={s.main__content}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          ) : (
            <div className={s.main__historyContent}>
              <HistoryCard />
              <HistoryCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
