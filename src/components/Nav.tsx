import { Link } from 'react-router-dom'
import styles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.container}>
        <div><Link to='/'>Logo</Link></div>
        <ul>
            <li><Link to='/map'>Map</Link></li>
            <li><Link to='/continents'>List</Link></li>
        </ul>
    </div>
  )
}

export default Nav