import s from "./MainTable.module.scss";
import edit from "../../../../assets/icons/edit.svg";
import trash from "../../../../assets/icons/trash.svg";

interface Property {
  id: number;
  name: string;
  location: string;
  token_price: number;
  date: string;
  rental: string;
  capital: string;
}

interface MainTableProps {
  properties: Property[];
  updateProp: (id: number) => void;
  deleteProp: (id: number) => void;
}

export const MainTable = ({
  properties,
  updateProp,
  deleteProp,
}: MainTableProps) => {
  return (
    <div className={s.tableWrap}>
      <table className={s.usersTable}>
        <thead>
          <tr className={s.usersTable__headRow}>
            <th className={s.firstColumnItem}>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Date of publication</th>
            <th>
              Estimated Rental <br /> Return
            </th>
            <th>
              Estimated Capital <br /> Appreciation
            </th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((data, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: `${
                  index % 2 === 0 ? "rgba(239, 239, 239, 1)" : "white"
                }`,
              }}
            >
              <td className={s.firstColumnItem}>{data.name}</td>
              <td>{data.location}</td>
              <td>{data.token_price} $</td>
              <td>{data.date}</td>
              <td>{data.rental}</td>
              <td>{data.capital}</td>
              <td>
                <div className={s.buttons}>
                  <button
                    className={s.manageButton}
                    onClick={() => updateProp(index)}
                  >
                    Edit <img src={edit} alt="edit" />
                  </button>
                  <button
                    className={s.manageButton}
                    onClick={() => deleteProp(data.id)}
                  >
                    Delete <img src={trash} alt="trash" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
