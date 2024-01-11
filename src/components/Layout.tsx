import { useContext } from "react";
import Footer from "./Footer"
import InfoBar from "./InfoBar"
import Nav from "./Nav"
import { CountryContext } from "../context/CountryContext";
import SearchBar from "./SearchBar";

import { ComponentProps } from '../utils/Types';



const Layout: React.FC<ComponentProps> = ({children}) => {
    const { state } = useContext(CountryContext);


  return (
    <div>
        <Nav />
        <SearchBar />
        {state.selectedCountry !== '' && (<InfoBar />)}
        {children}
        <Footer />
    </div>
  )
}

export default Layout