import { useReducer, useState } from 'react'
import continentData from './data/byContinent.json'
import capitolData from './data/byCapitol.json'
import languagesData from './data/byLanguages.json'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout'
import Map from './pages/Map'
import Search from './pages/Search.tsx';
import ContinentList from './pages/ContinentList'
import CountryList from './pages/CountryList'

import { CountryContext } from "./context/CountryContext.tsx"
import { CountryReducer}  from "./context/CountryReducer.tsx"





function App() {

  const initialState = {
    selectedCountry: '', 
  };
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  return (
    <>
    <Router>
      <CountryContext.Provider value={{ state, dispatch }}>
      {/* Loading */}
        <Layout>
          <Routes>
            <Route path="/*" element={<Navigate to="/continents" replace />}></Route>
            <Route path="/map" element={<Map/>}></Route>
            <Route path={"/search/:searchId"} element={<Search/>}></Route>
            <Route path="/continents" element={<ContinentList/>}></Route>
            <Route path="/continents/:continentId" element={<CountryList/>}></Route>
          </Routes>
        </Layout>
      </CountryContext.Provider>
    </Router>
    </>
  )
}

export default App
