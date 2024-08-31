import s from "./Main.module.scss";
import { Card } from "../../../../components/Card/Card";
import { SearchBar } from "../../../../features/SearchBar/SearchBar";
import { Down } from "../../../../assets/icons/Down";
import { filteredPropertyAPI } from "../../../../api/property/filteredProperty";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  name: string;
  token_price: string;
  location: string;
  main_image_url: string;
}
export const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const item = [
    {
      title: "Name",
    },
    {
      title: "Desc",
    },
  ];
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await filteredPropertyAPI.filter({
          offset: 0,
          limit: 0,
        });
        setProperties(response);
      } catch (error) {
        console.error("Failed to fetch properties", error);
      }
    };

    fetchProperties();
  }, []);

  console.log("This page is properties");

  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__heading}>Properties</h1>
      <div className={s.links}>
        <a href="">All /</a> <a href="/active">Active</a>
      </div>
      <div className={s.main__searching}>
        <div className={s.searchBar}>
          <SearchBar handleChange={() => ""} val="val" />
        </div>
        <div className={s.dropdown}>
          <div className={s.dropdown__top}>
            Sort by
            <Down />
          </div>
          <div className={s.dropdown__bottom}>
            {item.map((a, index) => (
              <button className={s.dropdown__botton} key={index}>
                {a.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={s.main__content}>
        {properties.map((item, index) => (
          <Link key={index} to={`/properties/${item.id}`}>
            <Card
              name={item.name}
              price={item.token_price}
              capital={""}
              rental={""}
              country={item.location}
              img={item.main_image_url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
