import s from "./Info.module.scss";

export const Info = () => {
  const data = [
    {
      title: "Complex and Infrastructure:",
      text: [
        "30-year leasehold with guaranteed extension",
        "Large panoramic pool",
        "Fitness center, SPA, and sauna",
        "Lounge area with a fireplace",
        "Covered parking, private access road",
        "Reception, premium concierge service, elevator ",
      ],
    },
    {
      title: "Each apartment is ready for living or renting:",
      text: [
        "Triple waterproofing",
        "Centralized utilities",
        "Well-designed kitchen with appliances",
        "Unique for Bali! Private washer and dryer",
        "Smart storage system",
        "TV, Internet, two air conditioners",
        "Bathtub, shower",
      ],
    },
  ];
  return (
    <div className={s.main}>
      {data.map((item, index) => (
        <div key={index} className={s.info}>
          <h1 className={s.info__title}>{item.title}</h1>
          <ul className={s.info__list}>
            {item.text.map((a, index) => (
              <li key={index} className={s.info__listItem}>
                <span className={s.circle}></span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
