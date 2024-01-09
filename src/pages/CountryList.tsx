import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import continentData from '../data/byContinent.json'

import styles from '../styles/CountryList.module.scss'



const CountryList = () => {
    const {countryId} = useParams()
    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        extractCountries(countryId)
    }, [])

    function extractCountries(id) {
        const filteredCountries = continentData.filter((country) => country.continent === id)
        setCountries(filteredCountries)
    }


  return (
    <div className={styles.container}>
        <h1>Countries in {countryId}</h1>
        <ul>
            {countries.map((country) => (
                <li>{country.country}</li>
            ))}
        </ul>
    </div>
  )
}

export default CountryList