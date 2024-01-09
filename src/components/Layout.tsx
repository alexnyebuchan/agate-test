import { useContext } from "react";
import Footer from "./Footer"
import InfoBar from "./InfoBar"
import Nav from "./Nav"
import { CountryContext } from "../context/CountryContext";


const Layout = ({children}) => {
    const { state } = useContext(CountryContext);


  return (
    <div>
        <Nav />
        {state.selectedCountry !== '' && (<InfoBar />)}
        {children}
        <Footer />
    </div>
  )
}

export default Layout