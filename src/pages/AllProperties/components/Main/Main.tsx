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
  total_tokens: number;
  tokens_available: number;
}
export const Properties = () => {
  const [val, setVal] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [sortCriteria, setSortCriteria] = useState("name");
  const [active, setActive] = useState(false);
  const [sortName, setSortName] = useState("Sort by");

  const item = [
    { title: "name", name: "name" },
    { title: "location", name: "location" },
    { title: "price", name: "maxTokenPrice" },
  ];

  const handleSort = (name: string) => {
    setSortCriteria(name);
    setSortName(name);
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
  }, []);

  const handleChange = async (value: any) => {
    setVal(value);
    if (!value) {
      try {
        const response = await filteredPropertyAPI.filter({
          offset: 0,
          limit: 100,
        });
        setProperties(response);
      } catch (error) {
        console.error("Failed to fetch all properties", error);
      }
      return;
    }
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
        <button
          style={{ color: !active ? "white" : "rgba(255,255,255,0.6)" }}
          onClick={() => setActive(false)}
        >
          All /
        </button>{" "}
        <button
          style={{ color: active ? "white" : "rgba(255,255,255,0.6)" }}
          onClick={() => setActive(true)}
        >
          Active
        </button>
      </div>
      <div className={s.main__searching}>
        <div className={s.searchBar}>
          <SearchBar handleChange={handleChange} val={val} />
        </div>
        <div className={s.dropdown}>
          <div className={s.dropdown__top}>
            {sortName}
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
        {t.map((item, index) => {
          const soldTokens =
            ((item.total_tokens - item.tokens_available) * 100) /
            item.total_tokens;

          if (active && soldTokens === 100) {
            return null;
          }

          return (
            <Link key={index} to={`/properties/${item.id}`}>
              <Card
                id={item.id}
                name={item.name}
                price={item.token_price}
                capital={item.estimated_capital_appreciation}
                rental={item.estimated_rental_return}
                country={item.location}
                token_price={item.token_price}
                total_tokens={item.total_tokens}
                soldTokens={soldTokens}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
