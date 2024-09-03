import s from "./Main.module.scss";
import { Card } from "../../../../components/Card/Card";
import { SearchBar } from "../../../../features/SearchBar/SearchBar";
import { Down } from "../../../../assets/icons/Down";
import { filteredPropertyAPI } from "../../../../api/property/filteredProperty";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sortProperties } from "../../../../utils/sort";

interface Property {
  id: number;
  name: string;
  token_price: number;
  location: string;
  main_image_url: string;
}
export const Properties = () => {
  const [val, setVal] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [sortCriteria, setSortCriteria] = useState("name");

  const item = [
    { title: "name", name: "name" },
    { title: "location", name: "location" },
    { title: "price", name: "maxTokenPrice" },
  ];

  const handleSort = (name: string) => {
    setSortCriteria(name);
  };
  const t = sortProperties(properties, sortCriteria);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await filteredPropertyAPI.filter({
          offset: 0,
          limit: 100,
        });
        setProperties(response);
      } catch (error) {
        console.error("Failed to fetch properties", error);
      }
    };

    fetchProperties();
  }, [val]);

  const handleChange = async (value: any) => {
    setVal(value);

    for (const filter of item) {
      if (filter.name && value) {
        try {
          const response = await filteredPropertyAPI.filter({
            offset: 0,
            limit: 100,
            [filter.name]: value,
          });

          if (response !== null && response.length > 0) {
            setProperties(response);
            break;
          } else {
            setProperties([]);
          }
        } catch (error) {
          console.error(
            `Failed to fetch properties using ${filter.name}`,
            error
          );
        }
      }
    }
  };

  console.log("This page is properties");

  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__heading}>Properties</h1>
      <div className={s.links}>
        <a href="">All /</a> <a href="/active">Active</a>
      </div>
      <div className={s.main__searching}>
        <div className={s.searchBar}>
          <SearchBar handleChange={handleChange} val={val} />
        </div>
        <div className={s.dropdown}>
          <div className={s.dropdown__top}>
            Sort by
            <Down />
          </div>
          <div className={s.dropdown__bottom}>
            {item.map((a, index) => (
              <button
                className={s.dropdown__botton}
                key={index}
                onClick={() => handleSort(a.title)}
              >
                {a.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={s.main__content}>
        {t.map((item, index) => (
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
