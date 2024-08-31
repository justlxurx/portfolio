import { SearchBar } from "../../../features/SearchBar/SearchBar";
import s from "./Properties.module.scss";
import { Down } from "../../../assets/icons/Down";
import { Link } from "react-router-dom";
import { MainTable } from "./MainTable/MainTable";
import { filteredPropertyAPI } from "../../../api/property/filteredProperty";
import { managePropertyApi } from "../../../api/property/manageProperty";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export const AdminProperties = () => {
  const manage = managePropertyApi;
  // const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [properties, setProperties] = useState([]);

  const item = [{ title: "Name" }, { title: "Desc" }];

  // useEffect(() => {
  //   if (val) {
  //     dispatch(filteredPropertyAPI.filter(val));
  //   }
  // }, [val, dispatch]);

  const handleChange = (value: any) => {
    setVal(value);
  };

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
  }, [val]);

  return (
    <div className={s.main}>
      <div className={s.main__top}>
        <h1 className={s.main__title}>Properties</h1>
        <Link to={"/admin/properties/create-new"}>
          <button className={s.main__button}>+ Add Property</button>
        </Link>
      </div>
      <div className={s.main__bottom}>
        <div className={s.main__searching}>
          <div className={s.searchBar}>
            <SearchBar
              handleChange={handleChange}
              val={val}
              backgroundColor="rgba(206, 205, 210, 0.55)"
              color="rgba(62, 61, 64, 1)"
              borderRadius="8px"
              iconColor="rgba(62, 61, 64, 1)"
              fontSize="15px"
            />
          </div>

          <div className={s.dropdown}>
            <div className={s.dropdown__top}>
              Sort by
              <Down color="rgba(212, 211, 213, 1)" width="8.46" height="5.52" />
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

        <div className={s.main__table}>
          <MainTable
            properties={properties}
            updateProp={() => {}}
            deleteProp={manage.delete}
          />
        </div>
      </div>
    </div>
  );
};
