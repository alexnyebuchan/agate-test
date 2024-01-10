import styles from '../styles/Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
        <p>&copy; Alex Buchan</p>
        <p>Agate Front End Interview Mini Project</p>
    </div>
  )
}

export default Footer