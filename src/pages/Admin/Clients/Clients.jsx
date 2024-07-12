// import styles from './Clients.module.scss';
// import trash from '../../../assets/images/trash.png';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useGetClientQuery } from '../../../service';
// import { setClient, removeClient } from '../../../slice';


// export const Clients = () => {
//   const { data: queries, isLoading } = useGetClientQuery();
//   const dispatch = useDispatch();
//   const clients = useSelector((state) => state.admin.client);
  
//   const handleRemoveClient = (index) => {
//     dispatch(removeClient(index));
//   };


//   useEffect(() => {
//     if (queries) {
//       dispatch(setClient(queries));
//     }
//   }, [queries, dispatch]);

//   const logOut = () =>{
//     localStorage.setItem('accessToken', '')
//     localStorage.setItem('refreshToken','')
//     window.location.href='/admin/login'
//   }
//   return (
//     <section className={styles.main}>
//       <div className={styles.main__top}>
//         <button className={styles.logout} onClick={logOut}>Logout</button>
//       </div>
//       <div className={styles.main__bottom}>
//         <h1 className={styles.main__heading}>Clients</h1>
//         <div className={styles.users}>
//           <p className={styles.users__title}>Registered Users</p>
//           <table className={styles.usersTable}>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Username</th>
//                 <th>Telephone</th>
//                 <th>Sending time</th>
//                 <th>Remove user</th>
//               </tr>
//             </thead>
//             <tbody>
//               {isLoading ? (
//                 <span>Loading...</span>
//               ) : clients ? (
//                 clients.map((data , index) => (
//                   <tr key={index} style={{backgroundColor:`${index%2==0 ? 'rgba(217, 217, 217, 0.5)':'white'}`}}>
//                     <td>{index+1}</td>
//                     <td>{data.name}</td>
//                     <td>{data.phone}</td>
//                     <td>25 June 2024, 17:16</td>
//                     <td>
//                       <button  onClick={() => handleRemoveClient(index)}>
//                         <img src={trash} alt='trash' width={15} height={15} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <div>No data available</div>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

import styles from './Clients.module.scss';
import trash from '../../../assets/images/trash.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetClientQuery } from '../../../service';
import { setClient, removeClient } from '../../../slice';

export const Clients = () => {
  const { data: queries, isLoading } = useGetClientQuery();
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.admin.client);

  useEffect(() => {
    if (queries) {
      dispatch(setClient(queries));
    }
  }, [queries, dispatch]);

  const handleRemoveClient = (index) => {
    dispatch(removeClient(index));
  };

  const logOut = () => {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    window.location.href = '/admin/login';
  };

  return (
    <section className={styles.main}>
      <div className={styles.main__top}>
        <button className={styles.logout} onClick={logOut}>Logout</button>
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
              ) : clients.length > 0 ? (
                clients.map((data, index) => (
                  <tr key={index} style={{ backgroundColor: `${index % 2 === 0 ? 'rgba(217, 217, 217, 0.5)' : 'white'}` }}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>25 June 2024, 17:16</td>
                    <td>
                      <button onClick={() => handleRemoveClient(index)}>
                        <img src={trash} alt='trash' width={15} height={15} className={styles.trash} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div>No data available</div>
              )}
            </tbody>
          </table></div>
        </div>
      </div>
    </section>
  );
};
