import React from "react";
import ExportedImage from "next/image";
import styles from './email-confirmed.module.css'
import { useRouter } from "next/router";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const ConfirmEmail: React.FC = () => {
  const onGoToMainPage =()=>{
    router.push("/")
  }
  const router = useRouter();
  
  return (
    <div className={`${nunito.className} ${styles.container}`}> 
      <div className={styles.containerCentre}>
      <ExportedImage
        src="/logo.png"
        alt=""
        width={280}
        height={120}
        className={styles.logoImg}/>

      <h1 className={styles.confirmedText}>Email successfully confirmed!</h1>
      
      <ExportedImage
        src="/mail-sent.jpg"
        alt="mail sent"
        className={styles.meilImg}
        width={400}
        height={400}/>

      <button className={styles.btnGo} onClick={onGoToMainPage}>
        Перейти на главную страницу
      </button>
      </div> 
    </div> 
  );
};

export default ConfirmEmail;
