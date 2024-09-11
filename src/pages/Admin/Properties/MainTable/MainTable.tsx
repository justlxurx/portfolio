import s from "./MainTable.module.scss";
import edit from "../../../../assets/icons/edit.svg";
import trash from "../../../../assets/icons/trash.svg";
import { formatDate } from "../../../../utils/formatData";
import gift from "../../../../assets/icons/gift.svg";
import { Link } from "react-router-dom";
import { DistributeRewards } from "../DistributeRewards/DistributeRewards";
import { useState } from "react";

interface Property {
  id: number;
  name: string;
  location: string;
  token_price: number;
  rental: string;
  capital: string;
  created_at: string;
}

interface MainTableProps {
  properties: Property[];
  deleteProp: (id: number) => void;
  openDistributeRew: () => void;
}

export const MainTable = ({
  properties,
  deleteProp,
  openDistributeRew,
}: MainTableProps) => {
  const [status, setStatus] = useState<"not distributed" | "distributed">(
    "not distributed"
  );
  return (
    <div className={s.tableWrap}>
      <table className={s.usersTable}>
        <thead>
          <tr className={s.usersTable__headRow}>
            <th className={s.firstColumnItem}>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>
              Date of <br /> publication
            </th>
            <th>
              Distribute <br /> rewards
            </th>
            <th>Manage</th>
            <th>
              Dividend <br /> date
            </th>
            <th>
              Dividend <br /> status
            </th>
          </tr>
        </thead>
        <tbody>
          {properties !== null &&
            properties.map((data, index) => (
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
                <td>{formatDate(data.created_at)}</td>
                <td>
                  <button className={s.giftButton} onClick={openDistributeRew}>
                    <img src={gift} alt="gift" />
                  </button>
                </td>
                <td>
                  <div className={s.buttons}>
                    <Link to={`/admin/properties/update/${data.id}`}>
                      <button className={s.manageButton}>
                        Edit <img src={edit} alt="edit" />
                      </button>
                    </Link>
                    <button
                      className={s.manageButton}
                      onClick={() => deleteProp(data.id)}
                    >
                      Delete <img src={trash} alt="trash" />
                    </button>
                  </div>
                </td>
                <td>01/01/2024</td>
                <td
                  style={{
                    color:
                      status == "not distributed"
                        ? "rgba(204, 112, 92, 1)"
                        : "rgba(94, 165, 3, 1)",
                  }}
                >
                  {status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
