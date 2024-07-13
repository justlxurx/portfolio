import s from './styles.module.scss'
import {FaSearch} from 'react-icons/fa'

export const SearchBar = ({val, handleChange} ) =>{
    return(
        <section className={s.inputWrapper}>
             <FaSearch id={s.searchIcon} />
             <input type="text" name="search"  placeholder='Type to search...' className={s.searchInput} value={val} onChange={(e)=>handleChange(e.target.value)}/>
        </section>
    )
}

