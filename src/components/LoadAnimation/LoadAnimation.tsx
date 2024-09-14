import ExportedImage from "next/image"
import LoginForm from "../LoginForm/LoginForm"
import styles from './LoadAnimation.module.css'

const LoadAnimation = () => {
  return (
    <div className={styles.container}>
    <div className={styles.logoTitle}>
      <ExportedImage
        className={styles.miniImage}  
        width={200}
        height={200}
        alt="BAIM logo" 
        src="/logo.svg" 
      />
      <h1 className={`${styles.heading} notranslate`}>BAIM</h1>
    </div>
  </div>
  ) 
}
 
export default LoadAnimation