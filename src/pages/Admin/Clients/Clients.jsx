import styles from './Clients.module.scss';
import trash from '../../../assets/images/trash.png';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetClientQuery } from '../../../service';
import { setClient } from '../../../slice';

export const Clients = () => {
  const { data: queries, isLoading } = useGetClientQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (queries) {
      dispatch(setClient(queries));
    }
  }, [queries, dispatch]);

  return (
    <section className={styles.main}>
      <div className={styles.main__top}></div>
      <div className={styles.main__bottom}>
        <h1 className={styles.main__heading}>Clients</h1>
        <div className={styles.users}>
          <p className={styles.users__title}>Registered Users</p>
          <table className={styles.usersTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Telephone</th>
                <th>Sending time</th>
                <th>Remove user</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <div>Loading...</div>
              ) : queries ? (
                queries.map((data) => (
                  // <Link to={`${country.nameEn}`} key={country.id}>
                  //   <div className={styles.country__visa}>
                  //     <img src={`data:image/png;base64,${country.image}`} alt={'flag'} />
                  //     <p>{i18n.language === 'en' ? country.nameEn : country.name}</p>
                  //   </div>
                  // </Link>
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>25 June 2024, 17:16</td>
                    <td>
                      <button>
                        <img src={trash} alt='trash' width={24} height={24} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div>No data available</div>
              )}

              {/* <tr>
                <td>1</td>
                <td>Sabinka</td>
                <td>+7 747 825 9823</td>
                <td>25 June 2024, 17:16</td>
                <td>
                  <button>
                    <img src={trash} alt='trash' width={24} height={24} />
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
