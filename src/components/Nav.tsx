import { useContext, useEffect, useState} from "react"
import { CountryContext } from "../context/CountryContext.tsx"

import { NavLink  } from 'react-router-dom'
import styles from '../styles/Nav.module.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope, faEarthAsia, faEarthAfrica, faEarthOceania, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'


const Nav: React.FC = () => {
  const [faType, setFaType] = useState(faEarthEurope)
  const { state } = useContext(CountryContext); 


  useEffect(() => {
    setFaType(getIconForContinent(state.selectedContinent))
  }, [state])

  const getIconForContinent = (continent:string) => {
    switch (continent) {
      case 'Europe':
        return faEarthEurope;
      case 'Asia':
        return faEarthAsia;
      case 'Africa':
        return faEarthAfrica;
      case 'Oceania':
        return faEarthOceania;
      case 'North America':
      case 'South America':
        return faEarthAmericas;
      default:
        return faEarthEurope;
    }
  };

  const navLinkStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "#6B7C93" : "",
    color: isActive ? "#FFFFFF" : "",
  });


  return (
    <nav className={styles.container}>
        <div><NavLink  to='/' ><FontAwesomeIcon className={styles.icon} icon={faType} /></NavLink ></div>
        <ul>
            <NavLink style={({ isActive }) => navLinkStyle(isActive)}  to='/map'><li>Map</li></NavLink >
            <NavLink style={({ isActive }) => navLinkStyle(isActive)}  to='/continents' ><li>List</li></NavLink >
        </ul>
    </nav>
  )
}

export default Nav