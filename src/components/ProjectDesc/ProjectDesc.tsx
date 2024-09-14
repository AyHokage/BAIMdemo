import styles from './ProjectDesc.module.css'
import ExportedImage from "next-image-export-optimizer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket as rocket } from '@fortawesome/free-solid-svg-icons';

const ProjectDesc = () => {
  return ( 
    <div className={styles.desc}> 
      <div className={styles.header}>
        <FontAwesomeIcon className={styles.ico} icon={rocket} />
        <h2 className={styles.heading}>Project name</h2>
      </div>
      <div className={styles.text}>
        <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut velit nostrum fugiat itaque, laudantium corporis quae voluptatem fuga molestias quasi optio dolorum esse neque suscipit est repudiandae. Illo, nam minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut velit nostrum fugiat itaque, laudantium corporis quae voluptatem fuga molestias quasi optio dolorum esse neque suscipit est repudiandae. Illo, nam minus.</p>
        <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut velit nostrum fugiat itaque, laudantium corporis quae voluptatem fuga molestias quasi optio dolorum esse neque suscipit est repudiandae. Illo, nam minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut velit nostrum fugiat itaque, laudantium corporis quae voluptatem fuga molestias quasi optio dolorum esse neque suscipit est repudiandae. Illo, nam minus.</p>
      </div>
    </div>
  )
}

export default ProjectDesc