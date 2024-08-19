import s from "./Main.module.scss";
import { Card } from "../../../../components/Card/Card";
import { SearchBar } from "../../../../features/SearchBar/SearchBar";
import { Down } from "../../../../assets/icons/Down";

export const Properties = () => {
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
      <h1 className={s.main__heading}>Properties</h1>
      <div className={s.links}>
        <a href="">All /</a> <a href="/active">Active</a>
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
      <div className={s.main__content}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
