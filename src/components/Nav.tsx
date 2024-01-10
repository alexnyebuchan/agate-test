import { NavLink  } from 'react-router-dom'
import styles from '../styles/Nav.module.scss'

const Nav: React.FC = () => {
  const navLinkStyle = (isActive) => ({
    backgroundColor: isActive ? "#6B7C93" : "",
    color: isActive ? "#FFFFFF" : "",
  });


  return (
    <nav className={styles.container}>
        <div><NavLink  to='/' >Logo</NavLink ></div>
        <ul>
            <NavLink style={({ isActive }) => navLinkStyle(isActive)}  to='/map'><li>Map</li></NavLink >
            <NavLink style={({ isActive }) => navLinkStyle(isActive)}  to='/continents' ><li>List</li></NavLink >
        </ul>
    </nav>
  )
}

export default Nav