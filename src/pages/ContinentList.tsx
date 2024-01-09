import { useEffect, useState } from 'react';
import continentData from '../data/byContinent.json'
import { Link } from 'react-router-dom';

import styles from '../styles/ContinentList.module.scss'


const ContinentList = () => {
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
        <div className={styles.countryList}>
        {continents.map((continent, index) => (
            <Link key={index} to={`/continents/${continent}`} >{continent}</Link>
        ))}
        </div>
    </div>
  )
}

export default ContinentList