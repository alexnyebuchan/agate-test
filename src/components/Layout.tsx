import { useContext } from "react";
import Footer from "./Footer"
import InfoBar from "./InfoBar"
import Nav from "./Nav"
import { CountryContext } from "../context/CountryContext";
import SearchBar from "./SearchBar";


const Layout: React.FC = ({children}) => {
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