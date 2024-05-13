import s from "./Buy.module.scss";

export const Buy = () => {
  const data = [
    {
      title: "Connect Your Wallet",
      text1:
        "Connect your MetaMask or other wallet to this website using the widget at the top of the page.",
      text2:
        "From there you can easily buy $DOGYAI tokens using ETH, BNB, MATIC, USDT, or bank card.",
    },
    {
      title: "Fund Your Purchase",
      text1:
        "Ensure you have either ETH, BNB, MATIC, or USDT in your wallet to swap for $DOGYAI. ",
      text2:
        "Deposit crypto into your wallet if you don't. Alternatively, use the Card option.",
    },
    {
      title: "Swap Tokens For $DOGYAI",
      text1:
        "Go to the buy widget and select the amount of tokens you wish to swap for $DOGYAI. Authorize the transactions in your wallet and make you leave enough ETH, BNB, or MATIC for gas fees.",
    },
    {
      title: "Stake $DOGYAI to Earn $DOGYAI",
      text1:
        "Once you've bought $WAI tokens, you can immediately put them to work. Click on 'Staking' in the menu and stake your tokens early to take advantage of the extremely high APY!",
    },
  ];
  return (
    <section className={s.buySection} id="buy">
      <h4 className={s.buySection__title}>How to Buy $DOGYAI</h4>
      <div className={s.buySection__content}>
        {data.map((item, id) => (
          <div key={id} className={s.content}>
            <div className={s.content__num}>{id + 1}</div>
            <div className={s.content__textWrapper}>
              <p className={s.content__title}>{item.title}</p>
              <p className={s.content__text}>
                {item.text1} <br /> <br /> {item.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
