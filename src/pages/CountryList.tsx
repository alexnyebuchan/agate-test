import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import continentData from '../data/byContinent.json'

import { CountryContext } from "../context/CountryContext"

import styles from '../styles/CountryList.module.scss'
import BackButton from "../components/BackButton"

import {CountriesbyContinent} from '../utils/Types'

const CountryList: React.FC = () => {
    const {continentId} = useParams<string>()
    const { dispatch } = useContext(CountryContext);
    const [countries, setCountries] = useState<CountriesbyContinent[]>()
    
    useEffect(() => {
        if(continentId){
            extractCountries(continentId)
        }
    }, [])

    function extractCountries(id:string) {
        const filteredCountries = continentData.filter((country) => country.continent === id)
        setCountries(filteredCountries)
    }

    function handleClick(selected: CountriesbyContinent){
        dispatch({type:'SET_SELECTED_COUNTRY', payload: selected.country})
        window.scroll(0, 0);
    }


  return (
    <div className={styles.container}>
        <h1>Countries in {continentId}:</h1>
        <ul>
            {countries && countries.map((c, index) => (
                <li key={index} onClick={() => handleClick(c)}>{c.country}</li>
            ))}
        </ul>
        <BackButton />
    </div>
  )
}

export default CountryList