import s from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({
  val,
  handleChange,
}: {
  val: string;
  handleChange: () => void;
}) => {
  return (
    <section className={s.inputWrapper}>
      <input
        type="text"
        name="search"
        placeholder="Type to search..."
        className={s.searchInput}
        // value={val}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearch id={s.searchIcon} color="white" />
    </section>
  );
};
