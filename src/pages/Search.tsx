import { useParams } from "react-router-dom"

import capitolData from '../data/byCapitol.json'
import { useContext, useEffect, useState } from "react"

import { CountryContext } from "../context/CountryContext"

import styles from '../styles/CountryList.module.scss'


const Search: React.FC = () => {
    const { searchId } = useParams()
    const { dispatch } = useContext(CountryContext);
    const [countries, setCountries] = useState([])


    const results = capitolData.filter((item) => 
      item.country.toLowerCase().includes(searchId.toLowerCase()) || 
      (item.city !== null && item.city.toLowerCase().includes(searchId.toLowerCase())))

      useEffect(() => {
        setCountries(results)
      }, [searchId])

      function handleClick(selected){
        dispatch({type:'SET_SELECTED_COUNTRY', payload: selected.country})
    }

      
    
      


  return (
    <div className={styles.container}>
        <h1>Countries with a name or capitol including: {searchId}</h1>
        <ul>
            {countries.map((country, index) => (
                <li key={index} onClick={() => handleClick(country)}>{country.country}</li>
            ))}
        </ul>
    </div>
  )
}

export default Search
