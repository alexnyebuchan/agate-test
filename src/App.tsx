import { useState } from 'react'
import continentData from './data/byContinent.json'
import capitolData from './data/byCapitol.json'
import languagesData from './data/byLanguages.json'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Map from './pages/Map'
import ContinentList from './pages/ContinentList'
import CountryList from './pages/CountryList'

function App() {
  // console.log(capitolData)
  // console.log(continentData)
  // console.log(languagesData)


  return (
    <>
    <Router>
      {/* Loading */}
      <Layout>
        <Routes>
          <Route path="/*" element={<Map/>}></Route>
          <Route path="/map" element={<Map/>}></Route>
          <Route path="/continents" element={<ContinentList/>}></Route>
          <Route path="/continents/:countryId" element={<CountryList/>}></Route>
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
