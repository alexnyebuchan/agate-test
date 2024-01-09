import Footer from "./Footer"
import InfoBar from "./InfoBar"
import Nav from "./Nav"

const Layout = ({children}) => {
  return (
    <div>
        <Nav />
        <InfoBar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout