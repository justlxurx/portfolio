import s from "./Info.module.scss";

export const Info = () => {
  const masterplan = [
    [
      "Sausage Army Launch",
      "WienerAI Contract Audit",
      "Presale LAUNCHED",
      "Final Wiener-y Preparations",
      "Worldwide Marketing Campaign",
    ],
    ["Sausage Army Expansion", "KOL Blast", "Ethereum Network Takeover"],
    [
      "Token Listing: The LONG wait is over. WienerAI launches on Global Exchange Platforms. This is the public $WAI launch",
      "DoggyAI Trading Bot Launch: Not just a bot; but an AI-powered crypto trading partner designed to give YOU the advantage you’ve been searching for.",
    ],
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
