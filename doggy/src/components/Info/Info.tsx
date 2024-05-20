import s from "./Info.module.scss";

export const Info = () => {
  const masterplan = [
    [
      "Concept Development",
      "Token Creation",
      "Contract Audit",
      "Presale Launch",
      "Website and Social Media",
      "Initial Marketing Push",
    ],
    ["Community Engagement", "Partnerships", "Exchange Listings"],
    ["Enhanced Features", "Global Outreach:", "Continuous Improvement"],
    ["Sustainable Growth", "AI Ecosystem", "Mainstream Adoption"],
  ];
  const tokenomics = [
    "30% - Presale",
    "20% - Staking",
    "10% - Community Rewards",
    "10% - DEX/CEX Liquidity",
    "20% - Marketing",
    "10% - Foundatiom vesting cliff",
  ];
  return (
    <section className={`${s.info} ${s.container}`}>
      <div className={s.tokenomics}>
        <h3 className={s.tokenomics__title}>Tokenomics</h3>

        <div className={s.tokenomics__content}>
          <ul className={s.tokenomics__list}>
            {tokenomics.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className={s.tokenomics__text}>Token Supply: 69.000.000.000</p>
        </div>
      </div>
      <div className={s.masterplan}>
        <h3 className={s.masterplan__title}>
          The DoggyAI <br /> Masterplan
        </h3>
        <div className={s.masterplan__contentWrapper}>
          {masterplan.map((item, index) => (
            <div key={index} className={s.masterplan__content}>
              <p className={s.masterplan__num}>STEP {index + 1}</p>
              <ul className={s.masterplan__list}>
                {item.map((data, index) => (
                  <li key={index} className={s.masterplan__listItem}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
