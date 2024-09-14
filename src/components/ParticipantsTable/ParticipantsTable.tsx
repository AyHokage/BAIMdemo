import styles from './ParticipantsTable.module.css'
import { projects } from '../../../lib/data'
import { useRouter } from 'next/router'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faUser, faCrown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react' 

const ParticipantsTable = ({project}: any) => { 
    const [showParticipants, setShowParticipants] = useState(false)
 
    const router = useRouter(); 
  
    const drawParticipantsIco = (arr: string[], manager: string) => {
      return arr.map((p: string, i:number) => {
        if (i < 3) {
          return p === manager ? <div className={`${styles.manager} ${styles.user}`}><FontAwesomeIcon className={styles.yellow} key={i} icon={faCrown} /><FontAwesomeIcon className={styles.grey} key={i} icon={faUser} /></div> 
          : <div className={styles.user}><FontAwesomeIcon className={styles.grey} key={i} icon={faUser} /></div>
        } if (i === arr.length-1 && arr.length > 2) {
          return <p className={styles.greyNum} key={i}>+{arr.length-3}</p>
        }
      })
    }
  
    const drawParticipants = (arr: string[], manager: string) => {
      return arr.map((p: string, i:number) => {
        return (
            <tr  key={i} className={styles.tr}>
                <th  className={i===arr.length-1 ? `${styles.cell} ${styles.last}` : `${styles.cell}`}>
                    {
                        manager === p ?
                        <div className={i===arr.length-1 ? `${styles.manager} ${styles.user}` : `${styles.manager} ${styles.user} ${styles.last}`}><FontAwesomeIcon className={styles.yellow} key={i} icon={faCrown} /><FontAwesomeIcon className={styles.grey} key={i} icon={faUser} /></div> :
                        <div className={i===arr.length-1 ? `${styles.user}` : `${styles.user} ${styles.last}`}><FontAwesomeIcon className={styles.grey} key={i} icon={faUser} /></div>
                    }
                    {p}
                </th>
            </tr>
        )
      })
    }
  
    return (
      <div className={styles.container}>
        <table className={styles.table}>
            <thead>
            <tr>
              <th className={styles.header}>Участники</th>
            </tr>
            </thead>
            <tbody className={styles.tbody}>
              {drawParticipants(project.participants, project.manager)}
            </tbody> 
        </table>
      </div>
    )
}

export default ParticipantsTable