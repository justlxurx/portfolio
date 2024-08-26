import s from "./MainTable.module.scss";
import edit from "../../../../assets/icons/edit.svg";
import trash from "../../../../assets/icons/trash.svg";

export const MainTable = () => {
  const properties = [
    {
      name: "Property 1",
      location: "Mexico, Mexico",
      price: "120$",
      date: "01/01/2024",
      rental: "20%",
      capital: "20%",
    },
    {
      name: "Property 1",
      location: "Mexico, Mexico",
      price: "120$",
      date: "01/01/2024",
      rental: "20%",
      capital: "20%",
    },
    {
      name: "Property 1",
      location: "Mexico, Mexico",
      price: "120$",
      date: "01/01/2024",
      rental: "20%",
      capital: "20%",
    },
  ];
  return (
    <div>
      <table className={s.usersTable}>
        <thead>
          <tr>
            <th>Name</th>
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
              <td>{data.name}</td>
              <td>{data.location}</td>
              <td>{data.price}</td>
              <td>{data.date}</td>
              <td>{data.rental}</td>
              <td>{data.capital}</td>
              <td>
                {/* <button onClick={() => handleRemoveClient(data.id)}>
                    <img
                      src={trash}
                      alt="trash"
                      width={15}
                      height={15}
                      className={s.trash}
                    />
                  </button> */}
                <div className={s.buttons}>
                  <button className={s.manageButton}>
                    Edit <img src={edit} alt="" />
                  </button>
                  <button className={s.manageButton}>
                    Delete <img src={trash} alt="" />
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
