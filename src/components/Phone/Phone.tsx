import styles from './Phone.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone as phone } from "@fortawesome/free-solid-svg-icons";

const Phone = () => {
  return (
    <>
        {/* <div className={`${styles.xl}`}></div>
        <div className={`${styles.l}`}></div>
        <div className={`${styles.m}`}></div> 
        <div className={`${styles.s}`}></div>
        <div className={`${styles.xs}`}></div> */}
        <button title="+994-55-529-29-66" className={`${styles.btn} ${styles.circle}`}>
        <FontAwesomeIcon
          style={{ fontSize: "1rem" }}
          className={styles.phone}
          icon={phone}
        /> 
        </button>
        <div className={`${styles.center} ${styles.circle}`}></div>
    </>
  ) 
}

export default Phone