import { useEffect } from "react";
import styles from './Plan.module.css';
import ExportedImage from "next/image";
import { Nunito } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useParams } from "next/navigation";

const nunito = Nunito({subsets: ["latin"]});

 
export default function Plan() {

    const language = useSelector(selectLanguages).language;

    useEffect(() => {
      const reveal = () => { 
        const reveals = document.querySelectorAll(".a");
  
        for (var i = 0; i < reveals.length; i++) {   
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
  
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      };

      window.addEventListener("scroll", reveal);
  

      return () => {
        window.removeEventListener("scroll", reveal);
      }; 
    }, []); 

    return (
      <div className={`${styles.container} ${nunito.className}`}>
        <div>
          <div className={styles.plan}>
            {language==='RU' && <h2 className={styles.heading}>Как мы работаем</h2>}
            {language==='EN' && <h2 className={styles.heading}>How do we work</h2>}
            {language==='AZ' && <h2 className={styles.heading}>azКак мы работаем</h2>}
            <div className={styles.threeColumns}>
              <div className={styles.col}>
                <div className={styles.column}>
                  <ExportedImage className={`${styles.ico} a first`} src='/barchart.png' alt='analysis' width={200} height={200} />
                  {language==='RU' && <p className={styles.p}>{`1) Выявляем потребности клиента посредством анализа`}</p> }
                  {language==='AZ' && <p className={styles.p}>{`1) azВыявляем потребности клиента посредством анализа`}</p> }
                  {language==='EN' && <p className={styles.p}>{`1) Identifying the needs of the client through analysis`}</p> }
                </div>
              </div> 

              <div className={styles.col}>
                <div className={styles.column}>
                  <ExportedImage className={`${styles.ico} a sec`} src='/test.png' alt='analysis' width={200} height={200} />
                  {language==='RU' && <p className={styles.p}>{`2) Разрабатываем все модули клиента под ключ и представляем тест`}</p>}
                  {language==='AZ' && <p className={styles.p}>{`2) azРазрабатываем все модули клиента под ключ и представляем тест`}</p>}
                  {language==='EN' && <p className={styles.p}>{`2) Developing all client modules on a turnkey basis and present the test`}</p>}
                </div>
              </div>

              <div className={styles.col}>
                <div className={styles.column}>
                  <ExportedImage className={`${styles.ico} a third`} src='/pcDeploy.png' alt='analysis' width={200} height={200} />
                  {language==='RU' && <p className={styles.p}>{`3) Переходим к внедрению`}</p>}
                  {language==='AZ' && <p className={styles.p}>{`3) azПереходим к внедрению`}</p>}
                  {language==='EN' && <p className={styles.p}>{`3) Moving on to the implementation`}</p>}
                </div>
              </div>
            </div>
          </div> 
        </div>
    </div>
    )
}