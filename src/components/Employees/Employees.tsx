import styles from './Employees.module.css'
import Employee from '../Employee/Employee'
import { useState } from 'react'

const Employees = () => {

  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(prev => !prev) 
  }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.heading}>Участники проекта:</h2>
            <div className={styles.btns}> 
                <button onClick={toggleShow} className={show ? styles.btnLess : styles.btn}>{show ? 'Показать меньше' : 'Показать всех'}</button>
                <div className="toggle">
                    <input type="radio" name="place" value="pc" id="pc" defaultChecked />
                    <label className={styles.label} htmlFor="pc">На стороне BAIM</label>
                    <input type="radio" name="place" value="server" id="server" />
                    <label className={styles.label} htmlFor="server">На стороне клиента</label>
                </div>
            </div>
        </div>
        <div className={styles.flexWrap}>
            <Employee show={true} />
            <Employee show={true} />
            <Employee show={true} />
            <Employee show={true} />

            <Employee show={show} />
            <Employee show={show} />
            <Employee show={show} />
            <Employee show={show} />
        </div>
    </div>
  )
}

export default Employees