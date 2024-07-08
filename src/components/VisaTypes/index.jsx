import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import { useGetCountryInfoQuery } from '../../service';
import { getId, textType, findType, getIdFromURL } from '../../helpers';
import { NavLink } from 'react-router-dom';
import { setType } from '../../slice/country';
import { useDispatch, useSelector } from 'react-redux';

const VisaTypes = ({ type, num }) => {
  const typeFromRedux = useSelector((state) => state.country.type);
  const dispatch = useDispatch();
  const url = window.location.pathname;
  const path = getId(url);
  const { data: country, isLoading } = useGetCountryInfoQuery(path);
  const [activeButton, setActiveButton] = useState(num);
  const [title, setTitle] = useState(textType(num));
  const zone = url.includes('shengen');

  const handleButtonClick1 = (newText, buttonNumber) => {
    setActiveButton(buttonNumber);
    setTitle(textType(buttonNumber));
    dispatch(setType(newText));
  };

  const [isTypeInitialized, setIsTypeInitialized] = useState(false);
  useEffect(() => {
    // Инициализируем type, только если он не был инициализирован ранее
    if (!isTypeInitialized) {
      dispatch(setType(type));
      setIsTypeInitialized(true);
    }
  }, [dispatch, type, isTypeInitialized]);
  console.log(typeFromRedux);
  return (
    <section className={styles.visaTypes}>
      <ul className={styles.routedList}>
        <li>
          <NavLink exact to='/'>
            Главная/
          </NavLink>
        </li>
        <li>
          {zone ? <NavLink to='/shengen'>Шенгенская зона/</NavLink> : <NavLink to='/others'>Другие страны/</NavLink>}
        </li>
        <li>
          <NavLink to={zone ? `/shengen/${path}` : `/others/${path}`}>{path}/</NavLink>
        </li>
        <li>
          <span>{title}</span>
        </li>
      </ul>
      <div className={styles.visaTypes__buttons}>
        {country.visa.map((visas, idx) => (
          <button
            key={idx}
            onClick={() => handleButtonClick1(country.visa1, 1)}
            style={{
              backgroundColor: activeButton === 1 ? 'rgba(50, 52, 154, 0.28)' : '#32349a',
            }}
          >
            {visas.visaName}
          </button>
        ))}
        {/* <button
          onClick={() => handleButtonClick1(country.visa1, 1)}
          style={{
            backgroundColor: activeButton === 1 ? 'rgba(50, 52, 154, 0.28)' : '#32349a',
          }}
        >
          ГОСТЕВАЯ ВИЗА В АВСТРАЛИЮ
        </button>
        <button
          onClick={() => handleButtonClick1(country.visa2, 2)}
          style={{
            backgroundColor: activeButton === 2 ? 'rgba(50, 52, 154, 0.28)' : '#32349a',
          }}
        >
          ДЕЛОВАЯ ВИЗА В АВСТРАЛИЮ
        </button>
        <button
          style={{
            backgroundColor: activeButton === 3 ? 'rgba(50, 52, 154, 0.28)' : '#32349a',
          }}
          onClick={() => handleButtonClick1(country.visa3, 3)}
        >
          ТУРИСТИЧЕСКАЯ ВИЗА В АВСТРАЛИЮ
        </button> */}
      </div>
      {isLoading ? <div>Loading...</div> : <div className={styles.visaTypes__text}>{typeFromRedux}</div>}
    </section>
  );
};
export default VisaTypes;
