import { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import continentData from '../data/byContinent.json'



export function extractContinent(id: string) {
    const { dispatch } = useContext(CountryContext); 
    const continent = continentData.filter((country) => country.country === id)[0].continent
    dispatch({type:'SET_SELECTED_CONTINENT', payload: continent})
  }