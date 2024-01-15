import { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import continentData from '../data/byContinent.json'
const { dispatch } = useContext(CountryContext); 


export function extractContinent(id: string) {
    const continent = continentData.filter((country) => country.country === id)[0].continent
    dispatch({type:'SET_SELECTED_CONTINENT', payload: continent})
  }