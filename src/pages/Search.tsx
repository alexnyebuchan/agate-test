import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import capitolData from '../data/byCapitol.json'

import BackButton from "../components/BackButton"

import { CountryContext } from "../context/CountryContext"

import styles from '../styles/Search.module.scss'

import { CountriesByCapitol } from "../utils/Types"
import { extractContinent } from "../utils/Functions"

const Search: React.FC = () => {
    const { searchId } = useParams<string>()
    const { dispatch } = useContext(CountryContext); 
    const [countries, setCountries] = useState<CountriesByCapitol[]>()

    useEffect(() => {
      if(searchId) {
        const results:CountriesByCapitol[] = capitolData.filter((item) => 
        item.country.toLowerCase().includes(searchId.toLowerCase()) || 
        (item.city !== null && item.city.toLowerCase().includes(searchId.toLowerCase())))
        setCountries(results)
      }
    }, [searchId])

    
    function handleClick(selected: any){
        dispatch({type:'SET_SELECTED_COUNTRY', payload: selected.country})
        extractContinent(selected.country)
    }

  return (
    <div className={styles.container}>
        <h1>Countries with a name or capitol including: {searchId}</h1>
        <ul>
            {countries && countries.map((country, index) => (
                <li key={index} onClick={() => handleClick(country)}>{country.country}</li>
            ))}
        </ul>
        <BackButton />
    </div>
  )
}

export default Search
