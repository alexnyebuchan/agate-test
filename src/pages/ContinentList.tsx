import { useContext, useEffect, useState } from 'react';
import continentData from '../data/byContinent.json'
import { Link } from 'react-router-dom';

import styles from '../styles/ContinentList.module.scss'
import { CountryContext } from '../context/CountryContext';


const ContinentList: React.FC = () => {
    const [continents, setContinents] = useState([])
    const { dispatch } = useContext(CountryContext);

    console.log(continentData)
    useEffect(() => {
        extractContinent(continentData)
    }, [])

    function extractContinent(countries) {
        const continentSet = new Set()

        countries.forEach((country) => {
            continentSet.add(country.continent)
        });
        setContinents([...continentSet])
    }

    function handleClick(continent){
        dispatch({type:'SET_SELECTED_CONTINENT', payload: continent})
    }

  return (
    <div className={styles.container}>
        <h1>Please Select a Continent.</h1>
        <h3>Navigate to find a country's capitol cities and languages by continent.</h3>
        <div className={styles.countryList}>
        {continents.map((continent, index) => (
            <Link key={index} to={`/continents/${continent}`} onClick={() => handleClick(continent)}>{continent}</Link>
        ))}
        </div>
    </div>
  )
}

export default ContinentList