import { useNavigate } from "react-router-dom";

import styles from '../styles/BackButton.module.scss';


const BackButton = () => {
    const navigate = useNavigate();

    function handleReturn(e){
        e.preventDefault();
        navigate('/')
      }


  return (
    <button className={styles.btn} onClick={handleReturn}>Home</button>
  )
}

export default BackButton