import styles from "./Project.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket as rocket } from '@fortawesome/free-solid-svg-icons';

const Project = ({index, setSelected, selected, project}: any) => {



  const reduceDesc = (desc: string) => {
    return desc.length > 80 ? desc.slice(0, 80) + '...' : desc
  } 
  
  return (
    <div onClick={() => setSelected(index)} className={selected ? styles.blueBlock : styles.grayBlock}>
        <FontAwesomeIcon className={styles.ico} icon={rocket} />
        <h2 className={styles.heading}>{project.title}</h2>
        <p className={styles.p}>{reduceDesc(project.miniDesc)}</p>
    </div>
  )
}

export default Project