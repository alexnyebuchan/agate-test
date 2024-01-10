import { useParams } from "react-router-dom"

import capitolData from '../data/byCapitol.json'
import { useContext, useEffect, useState } from "react"

import BackButton from "../components/BackButton"

import { CountryContext } from "../context/CountryContext"
import {CountryContextType} from '../utils/Types'


import styles from '../styles/Search.module.scss'


const Search: React.FC = () => {
    const { searchId } = useParams()
    const { dispatch } = useContext(CountryContext) as { state: CountryContextType }; 
    const [countries, setCountries] = useState([])

    useEffect(() => {
      if(searchId) {
        const results = capitolData.filter((item) => 
        item.country.toLowerCase().includes(searchId.toLowerCase()) || 
        (item.city !== null && item.city.toLowerCase().includes(searchId.toLowerCase())))
        setCountries(results)
      }
    }, [searchId])

    


      function handleClick(selected: any){
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
        <BackButton />
    </div>
  )
}

export default Search
