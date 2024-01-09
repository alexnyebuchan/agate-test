import { useContext } from "react"
import { CountryContext } from "../context/CountryContext.tsx"

import capitolData from '../data/byCapitol.json'
import languageData from '../data/byLanguages.json'


const InfoBar = () => {
  const { state } = useContext(CountryContext);

  


  return (
    <div>{state.selectedCountry}</div>
  )
}

export default InfoBar