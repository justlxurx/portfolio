import s from "./Faq.module.scss";
import { useState } from "react";
import plus from "../../assets/images/plus.svg";

export const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const toggleOpenHandler1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleOpenHandler2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleOpenHandler3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleOpenHandler4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleOpenHandler5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleOpenHandler6 = () => {
    setIsOpen6(!isOpen6);
  };
  const data = [
    {
      title: "What s DoggyAI?",
      text: "DoggyAI is the cutting-edge crypto meme project you didn’t know you needed until now! Imagine a super-smart doggy that combines advanced artificial intelligence with a pawsome understanding of the power of memes. DoggyAI is here to sniff out secrets and generate the cutest dog-themed memes in the meme universe. Get ready for a tail-waggingly good time as DoggyAI fetches the best in AI and meme magic!",
      isOpen: isOpen1,
      toggleFunc: toggleOpenHandler1,
    },
    {
      title: "What s DoggyAI Presale?",
      text: "The DoggyAI Presale is your golden opportunity to fetch DoggyAI tokens at a bargain price before they hit the big leagues. Imagine grabbing those tokens for mere kibble instead of the premium steak price they'll command later. The presale comes in several stages, each lasting between 4-7 days. As each stage progresses, the price goes up, so the early bird catches the cheapest bone! Don’t miss out on this tail-wagging deal before it’s gone!",
      isOpen: isOpen2,
      toggleFunc: toggleOpenHandler2,
    },
    {
      title: "I bought a DoggyAI, where can i see my token?",
      text: "Staked Tokens: Your staked tokens are chilling in the Staking Menu, earning rewards like a good dog waiting for treats. Just head over there to see your stash grow!Unstaked Tokens: Your unstaked tokens are lounging on the Buy Widget on the DoggyAI homepage. Just remember to reconnect your wallet to view your woof-tastic tokens on the Buy Widget. Think of it as your token kennel where they’re just waiting for their next command!",
      isOpen: isOpen3,
      toggleFunc: toggleOpenHandler3,
    },
    {
      title: "Is DoggyAI A Meme Coin?",
      text: "DoggyAI isn’t just a meme coin; it’s an AI-generated meme doggy with a personality as big as a well-seasoned Shiba Inu! DoggyAI is rallying a pack of fans, fondly known as the Doggy Style Army. There’s a new top dog in the meme park, and it’s none other than DoggyAI! Woof woof!",
      isOpen: isOpen4,
      toggleFunc: toggleOpenHandler4,
    },
    {
      title: "Can I Trust the Presale’s Smart Contract Security?",
      text: "Absolutely! Our smart contract has been given two paws up by Coinsult.net, a top dog in the world of smart contract auditing. They’ve sniffed out any potential issues and declared it safe and secure. So rest easy, your tokens are in good paws!",
      isOpen: isOpen5,
      toggleFunc: toggleOpenHandler5,
    },
    {
      title: "Do I Need a Crypto Wallet to Buy?",
      text: "You bet your biscuit you do! To buy and claim your presale $DOGYAI, you’ll need a crypto wallet. We recommend using MetaMask, the go-to decentralized wallet for both crypto newbies and seasoned pros. It’s as easy as teaching an old dog new tricks! Once you’ve set up and added funds to your Best Wallet, simply connect to the widget at the top of the page and fetch yourself some presale $DOGYAI. Easy peasy, pup squeezy!",
      isOpen: isOpen6,
      toggleFunc: toggleOpenHandler6,
    },
  ];

  return (
    <section className={`${s.faq} ${s.container}`} id="faq">
      <p className={s.faq__title}>FAQ</p>
      <div className={s.faq__contentWrapper}>
        {data.map((item, id) => (
          <button onClick={item.toggleFunc}>
            <div key={id} className={s.faq__content}>
              <div className={s.question}>
                <p className={s.question__text}>{item.title}</p>

                {/* <Plus /> */}
                <img
                  src={item.isOpen ? plus : plus}
                  alt="plus"
                  className={s.plus}
                />
              </div>
              {item.isOpen ? <div className={s.answer}>{item.text}</div> : ""}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
