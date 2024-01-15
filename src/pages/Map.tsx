import React, { useContext } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

import styles from '../styles/Map.module.scss'

import features from "../data/features.json"
import { CountryContext } from "../context/CountryContext";

import { extractContinent } from "../utils/Functions";


const Map: React.FC = () => {
  const { dispatch } = useContext(CountryContext);

  function handleClick (geo: any, _e:any) {
    dispatch({type:'SET_SELECTED_COUNTRY', payload: geo.properties.name})
    extractContinent(geo.properties.name)
  }

  return (
    <div className={styles.container}>
    <ComposableMap className={styles.map}>
      <Geographies geography={features}>
        {({ geographies }) =>
          geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} onClick={(e) => handleClick(geo, e)} />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>

  )
}

export default Map