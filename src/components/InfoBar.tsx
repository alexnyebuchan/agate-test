import { useContext, useEffect, useState } from "react"
import { CountryContext } from "../context/CountryContext.tsx"

import capitolData from '../data/byCapitol.json'
import languageData from '../data/byLanguages.json'

import styles from '../styles/InfoBar.module.scss'



const InfoBar = () => {
  const [capitol, setCapitol] = useState('')
  const [languages, setLanguages] = useState([])
  const { state } = useContext(CountryContext);
  const country = state.selectedCountry;

  useEffect(() => {
    getCapitol(country)
    getLanguages(country)
  }, [state])

  function getCapitol(id){
    const filteredForCapitol = capitolData.filter((c) => c.country === country)
    if(filteredForCapitol[0].city) {
      setCapitol(filteredForCapitol[0].city)
    } else {
      setCapitol(`${country} has no capitol listed.`)
    }
    
  }

  function getLanguages(id){
    const filteredForLangs = languageData.filter((c) => c.country === country)
    if(filteredForLangs.length > 0) {
      setLanguages(filteredForLangs[0].languages)
    } else {
      setLanguages([`${country} has no language listed.`])
    }
  }

  console.log(languages)

  return (
    <div className={styles.container}>
      <h2>{country}: </h2>
      <div className={styles.infoContainer}>
      <p>Capitol city: {capitol}</p>
      <p>Languages: {languages.map((lang, index) => (
        <span key={index}>{lang}{index === languages.length -1 ? "" : ', '}</span>
      ))}</p>
      </div>
    </div>
  )
}

export default InfoBar