import { Faq } from "../../components/Faq/Faq";
import { FeaturedIn } from "../../components/FeaturedIn/FeaturedIn";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Partners } from "../../components/Partners/Partners";
import { Main } from "../../components/Main/Main";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Main />
      {/* <FeaturedIn />
      <Faq />
      <Partners /> */}
      <Footer />
    </>
  );
};
