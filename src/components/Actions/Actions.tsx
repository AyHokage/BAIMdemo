import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons"
import styles from './Actions.module.css'
import { useRouter } from "next/router"
import { removeProject } from "@/services/ProjectsReducer"
import { useDispatch } from "react-redux"

const Actions = ({projectId}: any) => {

  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
        <button onClick={() => router.push(`/projects/${projectId}/edit`)} className={`${styles.underlined} ${styles.btn}`}><FontAwesomeIcon className={styles.ico} icon={faPencil} /></button>
        <button onClick={() => dispatch(removeProject(projectId))} className={`${styles.notUnderlined} ${styles.btn}`}><FontAwesomeIcon className={styles.ico} icon={faTrashCan} /></button>
    </div>
  )
}

export default Actions