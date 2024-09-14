import ExportedImage from "next-image-export-optimizer";
import styles from './Employee.module.css'

const Employee = ({show}: any) => {
  return (
    <div className={show ? styles.whiteBlock : styles.none}>
        <ExportedImage className={styles.img} src='/employee.png' alt='employee' width={300} height={300} />
        <div className={styles.text}>
          <h3 className={styles.heading}>Name of employee</h3>
          <p>Position of employee</p>
        </div> 
    </div>
  )
}

export default Employee