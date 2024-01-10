import { useEffect, useState } from 'react';
import continentData from '../data/byContinent.json'
import { Link } from 'react-router-dom';

import styles from '../styles/ContinentList.module.scss'


const ContinentList: React.FC = () => {
    const [continents, setContinents] = useState([])

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

  return (
    <div className={styles.container}>
        <h1>Please Select a Continent.</h1>
        <h3>Navigate to find a country's capitol cities and languages by continent.</h3>
        <div className={styles.countryList}>
        {continents.map((continent, index) => (
            <Link key={index} to={`/continents/${continent}`} >{continent}</Link>
        ))}
        </div>
    </div>
  )
}

export default ContinentList