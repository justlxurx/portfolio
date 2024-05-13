import s from "./About.module.scss";

export const About = () => {
  return (
    <section className={s.main}>
      <ul className={s.main__list}>
        <li className={s.main__listItem}>
          <a href="#doggyai">What is DoggieAI?</a>
        </li>
        <li className={s.main__listItem}>
          <a href="#buy"> How to buy</a>
        </li>
        <li className={s.main__listItem}>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </section>
  );
};
