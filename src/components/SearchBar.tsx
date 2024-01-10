import { useNavigate  } from 'react-router-dom';

import styles from '../styles/SearchBar.module.scss';

import { useDebounce } from '../utils/useDebounce';



// Search through capitol data as it includes both country and capitol name. Any field. If anything is in the search bar, display the search page.
const SearchBar: React.FC = () => {
  let navigate = useNavigate();

  function handleInput(e:any) {
        const value = e.target.value
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
        <input onChange={handleInput} type="text" placeholder="Search for country or capital..."/>
    </div>
  )
}

export default SearchBar