import styles from './styles.module.scss'
import { useUpdateShengenZoneMutation, useSaveShengenZoneMutation, useGetShengenImagesQuery } from '../../../service'
import { useState, useEffect } from 'react'
import { SearchBar } from '../../../components/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { filterShengenCountry, setFilterCountryData, setCountry, updateCountry } from '../../../slice'
import { SlPencil } from "react-icons/sl";
import { FaSave } from "react-icons/fa";

export const DashboardShengen = () => {
  const [editableRow, setEditableRow] = useState(null);
  const [editableData, setEditableData] = useState({});
  const {data: otherCountry, isLoading: countryLoading} = useGetShengenImagesQuery()
  const [val, setVal] = useState('')
  const [num, setNum] = useState(0)
  const [save] = useUpdateShengenZoneMutation()
  // const [save] = useSaveShengenZoneMutation()
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.country.filterCountryData)

  useEffect(() => {
    if (otherCountry) {
      dispatch(setCountry(otherCountry))
      dispatch(setFilterCountryData(otherCountry))
    }
  }, [otherCountry, dispatch])

  const handleChange = (value) => {
    setVal(value)
    if (value) {
      dispatch(filterShengenCountry(value));
    } 
    else {
      dispatch(setFilterCountryData(otherCountry));
    }
  }

  const handleEdit = (index, data) => {
    // if (editableRow !== null && editableRow !== index) {
    //   saveEdits();
    // }

    setNum(index)
    setEditableRow(index);
    setEditableData(data);
  }
  console.log('num is:'+num)

  const saveEdits = async() => {
    if (editableRow !== null) {
        try {
            const result = await save({id:num, body:editableData}); // Вызов мутации для обновления данных
            
            console.log("result is:")
            console.log(result)
            console.log("editable data is")
            console.log(editableData)
            dispatch(updateCountry({ index: editableRow, updatedData: editableData }));
          } catch (error) {
            console.error("Не удалось обновить данные: ", error);
          }
     setEditableRow(null);
     setEditableData({});
    }

  };

  const handleInputChange = (e, field) => {
    setEditableData({
      ...editableData,
      [field]: e.target.value,
    });
  };

  const logOut = () => {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    window.location.href = '/admin/login';
  };

  return (
    <section className={styles.main}>
      <div className={styles.main__top}>
        <div className={styles.search}>
          <SearchBar val={val} handleChange={handleChange} />
        </div>
        <button className={styles.logout} onClick={logOut}>Logout</button>
      </div>

      <div className={styles.main__bottom}>
        <table className={styles.usersTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Страна</th>
              <th>Country</th>
              <th>Flag</th>
              <th>Price</th>
              <th>Deadline</th>
              <th>Заголовок</th>
              <th>Title</th>
              <th>Текст</th>
              <th>Text</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {countryLoading ? (
              <span>Loading...</span>
            ) :
              // (val !== '' ? countries : otherCountry)
              countries.map((data, index) => (
                <tr key={index} style={{ backgroundColor: `${index % 2 === 0 ? 'rgba(217, 217, 217, 0.5)' : 'rgba(217, 207, 207, 0.8)'}` }}>
                  <td>{data.id}</td>
                  <td>
                    <input
                      type="text"
                      value={editableRow === index ? editableData.name : data.name}
                      onChange={(e) => handleInputChange(e, 'name')}
                      disabled={editableRow !== index}
                      // disabled
                      style={{ backgroundColor: `inherit` }} 
                      />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editableRow === index ? editableData.nameEn : data.nameEn}
                      onChange={(e) => handleInputChange(e, 'nameEn')}
                      disabled={editableRow !== index}
                      // disabled
                      style={{ backgroundColor: `inherit` }} />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editableRow === index ? editableData.image : data.image}
                      onChange={(e) => handleInputChange(e, 'image')}
                      disabled={editableRow !== index}
                      style={{ backgroundColor: `${editableRow !== index ? "inherit" : "white"}` }} />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editableRow === index ? editableData.price : data.price}
                      onChange={(e) => handleInputChange(e, 'price')}
                      disabled={editableRow !== index}
                      style={{ backgroundColor: `${editableRow !== index ? "inherit" : "white"}` }} />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editableRow === index ? editableData.deadline : data.deadline}
                      onChange={(e) => handleInputChange(e, 'deadline')}
                      disabled={editableRow !== index}
                      style={{ backgroundColor: `${editableRow !== index ? "inherit" : "white"}` }} />
                  </td>

                  <td>
                    <textarea
                      value={editableRow === index ? editableData.title : data.title}
                      onChange={(e) => handleInputChange(e, 'title')}
                      rows={10}
                      disabled={editableRow !== index}
                      style={{ backgroundColor: `${editableRow !== index ? "inherit" : "white"}` }}>
                    </textarea>
                  </td>

                  <td>
                    <textarea
                      value={editableRow === index ? editableData.titleEn : data.titleEn}
                      onChange={(e) => handleInputChange(e, 'titleEn')}
                      rows={10}
                      disabled={editableRow !== index}
                      style={{ backgroundColor: `${editableRow !== index ? "inherit" : "white"}` }}>
                    </textarea>
                  </td>
                  <td>
                    <textarea
                      value={editableRow === index ? editableData.text : data.text}
                      onChange={(e) => handleInputChange(e, 'text')}
                      rows={10}
                      disabled={editableRow !== index}
                      style={{ backgroundColor: `${editableRow !== index ? "inherit" : "white"}` }}>
                    </textarea>
                  </td>

                  <td>
                    <textarea
                      value={editableRow === index ? editableData.textEn : data.textEn}
                      onChange={(e) => handleInputChange(e, 'textEn')}
                      rows={10}
                      disabled={editableRow !== index}
                      style={{ backgroundColor: `${editableRow !== index ? "inherit" : "white"}` }}>
                    </textarea>
                  </td>
                  <td>
                    {editableRow === index ?
                      <button onClick={saveEdits}>
                        <FaSave size={15} className={styles.icon} />
                      </button>
                      :
                      <button onClick={() => handleEdit(data.id, data)}>
                        <SlPencil size={15} className={styles.icon} />
                      </button>}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}
