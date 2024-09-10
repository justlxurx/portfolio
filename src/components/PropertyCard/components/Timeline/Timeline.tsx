import s from "./Timeline.module.scss";
import { Coin } from "../../../../assets/icons/coin";
import { Settings } from "../../../../assets/icons/settings";

export const Timeline = () => {
  const data = [
    {
      title: "Pre-construction funding",
      time: "Apr, 2024",
      icon: <Coin />,
    },
    {
      title: "Construction launch",
      time: "May, 2024",
      icon: <Settings />,
    },
    {
      title: "Construction launch",
      time: "May, 2024",
      icon: <Settings />,
    },
    {
      title: "Construction launch",
      time: "May, 2024",
      icon: <Settings />,
    },
    {
      title: "Construction launch",
      time: "May, 2024",
      icon: <Settings />,
    },
  ];
  return (
    <div className={s.main}>
      <h1 className={s.main__title}>Project Timeline</h1>
      <div className={s.wrap}>
        {data.map((a, index) => (
          <div key={index} className={s.timeline}>
            {a.icon}
            <div className={s.timeline__info}>
              <p className={s.timeline__name}>{a.title}</p>
              <span className={s.timeline__time}>{a.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
