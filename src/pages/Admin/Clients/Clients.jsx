import styles from "./Clients.module.scss";
import trash from "../../../assets/images/trash.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetClientQuery, useDeleteUserMutation } from "../../../service";
import { setClient, removeClient } from "../../../slice";
import { SearchBar } from "../../../components/SearchBar";
import { filterClient, setSearchClient } from "../../../slice";

export const Clients = () => {
  const { data: queries, isLoading } = useGetClientQuery();
  const [deleteUser] = useDeleteUserMutation();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.client);
  const clients = useSelector((state) => state.admin.searchClient);
  const [val, setVal] = useState("");

  useEffect(() => {
    if (val) {
      dispatch(setSearchClient(val));
    }
  }, [dispatch]);

  const handleChange = (value) => {
    setVal(value);
    if (value) {
      dispatch(filterClient(value));
    } else {
      dispatch(setSearchClient([]));
    }
  };

  useEffect(() => {
    if (queries) {
      dispatch(setClient(queries));
    }
  }, [queries, dispatch]);

  const handleRemoveClient = (index) => {
    dispatch(removeClient(index));
    deleteUser(index);
  };

  const logOut = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
    window.location.href = "/admin/login";
  };
  return (
    <section className={styles.main}>
      <div className={styles.main__top}>
        <div className={styles.search}>
          <SearchBar val={val} handleChange={handleChange} />
        </div>
        <button className={styles.logout} onClick={logOut}>
          Logout
        </button>
      </div>
      <div className={styles.main__bottom}>
        <h1 className={styles.main__heading}>Clients</h1>
        <div className={styles.users}>
          <p className={styles.users__title}>Registered Users</p>
          <div className={styles.tableWrap}>
            <table className={styles.usersTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Telephone</th>
                  <th>Sending time</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  (val !== "" ? clients : users).map((data, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: `${
                          index % 2 === 0 ? "rgba(217, 217, 217, 0.5)" : "white"
                        }`,
                      }}
                    >
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.phone}</td>
                      <td>
                        {data.createdAt
                          ? data.createdAt.replace(
                              /T(\d{2}:\d{2}:\d{2})\.\d+Z/,
                              " $1"
                            )
                          : ""}
                      </td>
                      <td>
                        <button onClick={() => handleRemoveClient(data.id)}>
                          <img
                            src={trash}
                            alt="trash"
                            width={15}
                            height={15}
                            className={styles.trash}
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
