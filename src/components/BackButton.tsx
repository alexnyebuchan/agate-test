import { useNavigate } from "react-router-dom";

import styles from '../styles/BackButton.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'


const BackButton = () => {
    const navigate = useNavigate();

    function handleReturn(e:any){
        e.preventDefault();
        navigate('/')
      }


  return (
    <button className={styles.btn} onClick={handleReturn}>Home<FontAwesomeIcon className={styles.icon} icon={faRotateLeft} /></button>
  )
}

export default BackButton