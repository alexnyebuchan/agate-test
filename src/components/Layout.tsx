import { ReactNode, useContext } from "react";
import Footer from "./Footer"
import InfoBar from "./InfoBar"
import Nav from "./Nav"
import { CountryContext } from "../context/CountryContext";
import SearchBar from "./SearchBar";
import {CountryContextType} from '../utils/Types'


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const { state } = useContext(CountryContext) as { state: CountryContextType };


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