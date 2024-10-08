import { SearchBar } from "../../../features/SearchBar/SearchBar";
import s from "./Properties.module.scss";
import { Down } from "../../../assets/icons/Down";
import { Link } from "react-router-dom";
import { MainTable } from "./MainTable/MainTable";
import { filteredPropertyAPI } from "../../../api/property/filteredProperty";
import { managePropertyApi } from "../../../api/property/manageProperty";
import { useState, useEffect } from "react";
import { sortProperties } from "../../../utils/sort";
import { characacteristicsApi } from "../../../api/property/manageCharacteristics";

export const AdminProperties = () => {
  const [val, setVal] = useState("");
  const [properties, setProperties] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("name");
  const [sortName, setSortName] = useState("Sort by");

  const item = [
    { title: "name", name: "name" },
    { title: "location", name: "location" },
    { title: "price", name: "maxTokenPrice" },
    // { title: "", name: "constructionStatus" },
    // { title: "", name: "isOnSecondaryMarket" },
    // { title: "", name: "landType" },
    // { title: "",  name:"limit"},
    // { title: "", name: "maxBalconies" },
    // { title: "", name: "maxBathrooms" },
    // { title: "", name: "maxBedrooms" },
    // { title: "", name: "maxCompletionDate" },
    // { title: "", name: "maxGarage" },
    // { title: "", name: "maxKitchens" },
    // { title: "", name: "maxLandArea" },
    // { title: "", name: "maxLeaseholdYears" },
    // { title: "", name: "maxLandArea" },
    // { title: "", name: "maxLivingRooms" },
    // { title: "", name: "maxPropertyArea" },
    // { title: "", name: "maxPropertyArea" },
  ];

  const handleSort = (name: string) => {
    setSortCriteria(name);
    setSortName(name);
  };
  const t = sortProperties(properties, sortCriteria);

  const fetchProperties = async () => {
    try {
      const response = await filteredPropertyAPI.filter({
        offset: 0,
        limit: 1000,
      });
      setProperties(response);
    } catch (error) {
      console.error("Failed to fetch properties", error);
    }
  };

  const handleDeleteProperty = async (id: number) => {
    try {
      const a = await managePropertyApi.delete(id);
      console.log("Delete: " + a);
      console.log(a);
      await characacteristicsApi.delete(id);
      fetchProperties(); // Обновляем список свойств после удаления
      alert("Deleted successfully");
    } catch (error) {
      console.error("Failed to delete property", error);
      alert("Failed to delete property");
    }
  };

  useEffect(() => {
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
              {sortName}
              <Down color="rgba(212, 211, 213, 1)" width="8.46" height="5.52" />
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

        <div className={s.main__table}>
          <MainTable properties={t} deleteProp={handleDeleteProperty} />
        </div>
      </div>
    </div>
  );
};
