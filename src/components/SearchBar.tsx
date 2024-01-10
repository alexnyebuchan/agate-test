import { useNavigate, useLocation } from 'react-router-dom';

import styles from '../styles/SearchBar.module.scss';

import { useDebounce } from '../utils/useDebounce';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Search through capitol data as it includes both country and capitol name. Any field. If anything is in the search bar, display the search page.
const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const {pathname} = useLocation();

  

  useEffect(() => {
    if(!pathname.startsWith('/search/')){
      setSearchValue('')
    }
  })

  function handleInput(e:any) {
        const value = e.target.value
        setSearchValue(value)
        navigateToSearch(value)
    }


  function navigateToSearch(searchId:string){
    if(searchId.length > 0){
      navigate(`/search/${searchId}`);
    } else {
      navigate('/')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}><FontAwesomeIcon className={styles.icon} icon={faSearch} /></div>
      <input onChange={handleInput} value={searchValue} type="text" placeholder="Search for country or capital..."/>
    </div>
  )
}

export default SearchBar