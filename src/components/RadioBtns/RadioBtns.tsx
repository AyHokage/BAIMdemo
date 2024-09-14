import styles from './RadioBtns.module.css'


const RadioBtns = ({choosePriority, importance, radios}: any) => {

  return (
    <div className={styles.container}>
      {radios && radios.map((r: string, i: number) => 
        <div onClick={() => choosePriority(r)} key={i} className={styles.radioTileGroup}>
          <div className={styles.inputContainer}>
            <input id={r} defaultChecked={r === importance} className={styles.radioButton} type="radio" name="radio" />
            <div className={styles.radioTile}>
              <label htmlFor={r} className={styles.radioTileLabel}>{r}</label>
            </div>
          </div>
        </div> 
      )}
    </div> 
  )   
}

export default RadioBtns
