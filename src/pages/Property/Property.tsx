import { Header } from "../../components/Header/Header";
import { PropertyCard } from "../../components/PropertyCard/PropertyCard";
import s from "./Property.module.scss";

export const Property = () => {
  return (
    <div className={s.wrap}>
      <Header />
      <PropertyCard />
    </div>
  );
};
