import { NavLink  } from 'react-router-dom'
import styles from '../styles/Nav.module.scss'

const Nav: React.FC = () => {
  return (
    <nav className={styles.container}>
        <div><NavLink  to='/' >Logo</NavLink ></div>
        <ul>
            <li><NavLink 
                style={({ isActive }) => {
                    return {backgroundColor: isActive ? "red" : "",};
                    }}  to='/map' 
                >Map</NavLink ></li>
            <li><NavLink style={({ isActive }) => {
                    return {backgroundColor: isActive ? "red" : "",};
                }}  to='/continents' >List</NavLink ></li>
        </ul>
    </nav>
  )
}

export default Nav