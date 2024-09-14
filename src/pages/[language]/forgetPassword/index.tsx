import ExportedImage from "next-image-export-optimizer";
import styles from './forgetPassword.module.css'
import ForgetPasswordForm from '@/components/ForgetPasswordForm/ForgetPasswordForm'

const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logoTitle}>
            <ExportedImage className={styles.miniImage} width={200} height={200} alt='BAIM logo' src='/logo.svg' />
            <h1 className={styles.heading}>BAIM</h1>
        </div>
        {/* <div className={styles.logoTitle}>
            <ExportedImage className={styles.bigImage} width={200} height={200} alt='BAIM logo' src='/logo.svg' />
        </div> */}
        <div className={styles.login}>
        <ForgetPasswordForm/>
        </div>
    </div>
  )
}

export default Login