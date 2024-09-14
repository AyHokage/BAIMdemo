import ExportedImage from "next-image-export-optimizer";
import Link from "next/link"
import styles from './Authorise.module.css'

const Authorise = () => {
  return (
    <div className={styles.bg}>
    <div className={styles.container}>
        <ExportedImage width={300} height={300} alt='403' src='/403.jpg' />
        <Link className={styles.link} href={'./login'}>Maybe you have enough rights to see this webpage, click at this link to log in</Link>
    </div>
    </div>
  )
}

export default Authorise