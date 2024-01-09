import { useEffect, useState } from 'react';
import continentData from '../data/byContinent.json'
import { Link } from 'react-router-dom';

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
    <div>
        <h1>Please Select a Continent.</h1>
        {continents.map((continent) => (
            <Link to={`/continents/${continent}`} ><p>{continent}</p></Link>
        ))}
    </div>
  )
}

export default ContinentList