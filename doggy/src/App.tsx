import "./global.scss";
import { Main } from "./components/Main/Main";
import { Numbers } from "./components/Numbers/Numbers";
import { FeaturedIn } from "./components/FeaturedIn/FeaturedIn";
import { Footer } from "./components/Footer/Footer";
import { Faq } from "./components/Faq/Faq";
import { Buy } from "./components/Buy/Buy";
import { Info } from "./components/Info/Info";
import { DoggyAI } from "./components/DoggyAI/DoggyAI";

function App() {
  return (
    <>
      <Main />
      <Numbers />
      <FeaturedIn />
      <DoggyAI />
      <Info />
      <Buy />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
