import { useContext, useEffect, useState } from "react"
import { CountryContext } from "../context/CountryContext.tsx"

import capitolData from '../data/byCapitol.json'
import languageData from '../data/byLanguages.json'

import styles from '../styles/InfoBar.module.scss'


const InfoBar: React.FC = () => {
  const [capitol, setCapitol] = useState<string>('')
  const [languages, setLanguages] = useState<string[]>([])
  const { state } = useContext(CountryContext);
  const country = state.selectedCountry;

  useEffect(() => {
    getCapitol(country)
    getLanguages(country)
  }, [state])

  function getCapitol(id: string){
    const filteredForCapitol = capitolData.filter((c) => c.country === id)
    if(filteredForCapitol.length > 0 && filteredForCapitol[0].city) {
      setCapitol(filteredForCapitol[0].city)
    } else {
      setCapitol(`${country} has no capitol listed.`)
    }
    
  }

  function getLanguages(id: string){
    const filteredForLangs = languageData.filter((c) => c.country === id)
    if(filteredForLangs.length > 0) {
      setLanguages(filteredForLangs[0].languages)
    } else {
      setLanguages([`${country} has no language listed.`])
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.currentlySelected}>Currently selected: </p>
        <h2>{country} </h2>
      </div>
      <div className={styles.infoContainer}>
      <p><b>Capitol city:</b> {capitol}</p>
      <p><b>Languages:</b> {languages.map((lang, index) => (
        <span key={index}>{lang}{index === languages.length -1 ? "" : ', '}</span>
      ))}</p>
      </div>
    </div> 
  )
}

export default InfoBar