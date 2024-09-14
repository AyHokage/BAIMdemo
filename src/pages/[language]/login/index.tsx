import ExportedImage from "next/image";
import styles from "./login.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";
import { Provider } from "react-redux";
import { store } from "@/services/store";

const Login = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.logoTitle}>
          <ExportedImage  
            className={styles.miniImage}  
            width={200} 
            height={200}
            alt="BAIM logo"
            src="/logo.svg" 
          /> 
          <h1 className={styles.heading}>BAIM</h1>
        </div>
        <div className={styles.login}>
          <LoginForm />
        </div>
      </div>
    </Provider>
  );
};

export default Login;
