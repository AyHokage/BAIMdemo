import styles from './SocialMedia.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook as fb} from '@fortawesome/free-brands-svg-icons'
import {faInstagram as insta} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin as linkedin} from '@fortawesome/free-brands-svg-icons'
import {faYoutube as youtube} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp as wa} from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
  return (
    <div className={styles.parent}>
        <div className={`${styles.child} ${styles.childOne}`}>
          <button className={`${styles.button} ${styles.btnOne}`}>
            <FontAwesomeIcon className={styles.ico} icon={fb} />
          </button>
        </div>
        <div className={`${styles.child} ${styles.childTwo}`}>
          <button className={`${styles.button} ${styles.btnTwo}`}>
            <FontAwesomeIcon className={styles.ico} icon={insta} />
          </button>
        </div>
        <div className={`${styles.child} ${styles.childThree}`}>
          <button className={`${styles.button} ${styles.btnThree}`}>
            <FontAwesomeIcon className={styles.ico} icon={linkedin} />
          </button>
        </div>
        <div className={`${styles.child} ${styles.childFour}`}>
          <button className={`${styles.button} ${styles.btnFour}`}>
            <FontAwesomeIcon className={styles.ico} icon={youtube} />
          </button>
        </div>
        <div className={`${styles.child} ${styles.childFive}`}>
          <button className={`${styles.button} ${styles.btnFive}`}>
            <FontAwesomeIcon className={styles.ico} icon={wa} />
          </button>
        </div>
    </div>
  )
}

export default SocialMedia