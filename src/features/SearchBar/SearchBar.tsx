import s from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({
  val,
  handleChange,
  backgroundColor,
  color,
  borderRadius,
  iconColor,
  fontSize,
}: {
  val: string;
  handleChange: (val: any) => void;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  iconColor?: string;
  fontSize?: string;
}) => {
  return (
    <section
      className={s.inputWrapper}
      style={{
        backgroundColor: `${backgroundColor}`,
        borderRadius: `${borderRadius}`,
      }}
    >
      <input
        type="text"
        name="search"
        placeholder="Type to search..."
        className={s.searchInput}
        style={{ color: `${color}`, fontSize: `${fontSize}` }}
        value={val}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearch id={s.searchIcon} color={`${iconColor}`} />
    </section>
  );
};
