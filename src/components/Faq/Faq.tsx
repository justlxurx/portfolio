import s from "./Faq.module.scss";

export const Faq = () => {
  const data = [
    {
      section: "Section 1",
      faq: [
        {
          title: "What is this platform about?",
          text: "This platform is a real estate investing platform. We help investors get passive income from fractional ownership of properties worldwide. Anyone can pick a home on our Marketplace, become its co-owner in the real world for as little as $100, and enjoy a stable rental income of up to 31% APR.",
        },
        {
          title: "How do I earn passive income?",
          text: "You can buy real estate fractions (tokens) that represent official property ownership. Anyone who buys a fraction becomes a co-owner of this property in the real world and starts getting income from rent. The rental income is distributed proportionally between fraction holders. Let's give an example: for instance, the rental APR is 12%. If you own 1 fraction worth 1005, it will bring you $12 per year. If you've bought 10 fractions worth $1000 in total, you will get $120.",
        },
        {
          title: "When will i start earning?",
          text: "This platform is a real estate investing platform. We help investors get passive income from fractional ownership of properties worldwide. Anyone can pick a home on our Marketplace, become its co-owner in the real world for as little as $100, and enjoy a stable rental income of up to 31% APR.",
        },
        {
          title: "How do i withdraw my rental income?",
          text: "This platform is a real estate investing platform. We help investors get passive income from fractional ownership of properties worldwide. Anyone can pick a home on our Marketplace, become its co-owner in the real world for as little as $100, and enjoy a stable rental income of up to 31% APR.",
        },
      ],
    },
    {
      section: "Section 2",
      faq: [
        {
          title: "What is this platform about?",
          text: "This platform is a real estate investing platform. We help investors get passive income from fractional ownership of properties worldwide. Anyone can pick a home on our Marketplace, become its co-owner in the real world for as little as $100, and enjoy a stable rental income of up to 31% APR.",
        },
        {
          title: "How do I earn passive income?",
          text: "You can buy real estate fractions (tokens) that represent official property ownership. Anyone who buys a fraction becomes a co-owner of this property in the real world and starts getting income from rent. The rental income is distributed proportionally between fraction holders. Let's give an example: for instance, the rental APR is 12%. If you own 1 fraction worth 1005, it will bring you $12 per year. If you've bought 10 fractions worth $1000 in total, you will get $120.",
        },
        {
          title: "When will i start earning?",
          text: "This platform is a real estate investing platform. We help investors get passive income from fractional ownership of properties worldwide. Anyone can pick a home on our Marketplace, become its co-owner in the real world for as little as $100, and enjoy a stable rental income of up to 31% APR.",
        },
        {
          title: "How do i withdraw my rental income?",
          text: "This platform is a real estate investing platform. We help investors get passive income from fractional ownership of properties worldwide. Anyone can pick a home on our Marketplace, become its co-owner in the real world for as little as $100, and enjoy a stable rental income of up to 31% APR.",
        },
      ],
    },
  ];

  return (
    <div className={`${s.faq} container`} id="faq">
      <p className={s.faq__title}>FAQ</p>

      {data.map((item, id) => (
        <div key={id} className={s.wrap}>
          <p className={s.faq__subtitle}>{item.section}</p>
          <div className={s.faq__contentWrapper}>
            {item.faq.map((a, id) => (
              <div className={s.card} key={id}>
                <h1 className={s.card__title}>{a.title}</h1>
                <p className={s.card__text}>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
