import s from './styles.module.scss'

export const SearchList = ({results}) => {
  return (<>
        {results.map((user, index) => (
              <tr key={index} style={{ backgroundColor: `${index % 2 === 0 ? 'rgba(217, 217, 217, 0.5)' : 'white'}` }}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>25 June 2024, 17:16</td>
               
              </tr>
            ))}
 </> )
}
