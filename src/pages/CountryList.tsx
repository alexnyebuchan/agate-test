import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import continentData from '../data/byContinent.json'

import { CountryContext } from "../context/CountryContext"

import styles from '../styles/CountryList.module.scss'
import BackButton from "../components/BackButton"



const CountryList: React.FC = () => {
    const {continentId} = useParams()
    const { dispatch } = useContext(CountryContext);
    const [countries, setCountries] = useState<string[]>([])
    
    useEffect(() => {
        extractCountries(continentId)
    }, [])

    function extractCountries(id:string) {
        const filteredCountries = continentData.filter((country) => country.continent === id)
        setCountries(filteredCountries)
    }

    function handleClick(selected){
        dispatch({type:'SET_SELECTED_COUNTRY', payload: selected.country})
    }


  return (
    <div className={styles.container}>
        <h1>Countries in {continentId}:</h1>
        <ul>
            {countries.map((country, index) => (
                <li key={index} onClick={() => handleClick(country)}>{country.country}</li>
            ))}
        </ul>
        <BackButton />
    </div>
  )
}

export default CountryList