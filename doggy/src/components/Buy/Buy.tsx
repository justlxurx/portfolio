import s from "./Buy.module.scss";

export const Buy = () => {
  const data = [
    {
      title: "Connect Your Wallet",
      text1:
        "Locate the presale widget at the top of this webpage and connect your preferred wallet. We offer various wallet options for your convenience.",
    },
    {
      title: "Select the Network",
      text1:
        "After connecting your wallet, you can participate in the presale on the Ethereum chain. Payments are accepted in ETH or ETH USDT.",
    },
    {
      title: " Purchase Tokens",
      text1:
        "Enter the amount of ETH or USDT you wish to exchange for $DOGYAI tokens and confirm the transaction in your wallet.",
    },
    {
      title: "Buy and Stake",
      text1:
        "To take advantage of high staking rewards, you will have the option to stake your tokens immediately after purchase. Staked tokens can be unlocked seven days after the presale ends.",
    },
    {
      title: "Claim Unstaked Tokens",
      text1:
        "If you opted not to stake your tokens at the time of purchase once the presale concludes, return to our website to claim your $DOGYAI tokens using the same wallet and network you used to purchase them.",
    },
  ];
  return (
    <section className={`${s.buySection} ${s.container}`} id="buy">
      <h4 className={s.buySection__title}>How to Buy $DOGYAI</h4>
      <div className={s.buySection__content}>
        {data.map((item, id) => (
          <div key={id} className={s.content}>
            <div className={s.content__num}>{id + 1}</div>
            <div className={s.content__textWrapper}>
              <p className={s.content__title}>{item.title}</p>
              <p className={s.content__text}>{item.text1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
