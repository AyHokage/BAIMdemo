import styles from './TwoColumns.module.css'
import ExportedImage from "next-image-export-optimizer";
import { Nunito } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";

const nunito = Nunito({subsets: ["latin"]});

const TwoColumns = () => {
  
  const language = useSelector(selectLanguages).language;

  return (
    <div className={`${styles.textAndImg} ${nunito.className}`}>
        <div className="a fade-left">
          <ExportedImage className={styles.img} width={500} height={300} alt='1c' src='/4.png' />
        </div>
        <div className="a fade-right">
          
        {language==='RU' && 
          <div className={styles.text}>
              <h2 className={styles.heading}>Отправь налоговый отчет прямо из 1С</h2> 
              <p>При отправке налогового отчета вам потребуется лишь ввести ID Asan IMZA. Остальное программа сделает все за вас</p>
          </div>
        }

        {language==='AZ' && 
          <div className={styles.text}>
              <h2 className={styles.heading}>AZОтправь налоговый отчет прямо из 1С</h2> 
              <p>AZПри отправке налогового отчета вам потребуется лишь ввести ID Asan IMZA. Остальное программа сделает все за вас</p>
          </div>
        }

        {language==='EN' && 
          <div className={styles.text}>
              <h2 className={styles.heading}>Send the tax report directly from 1C</h2> 
              <p>When submitting a tax report, you will only need to enter the Asan IMZA ID. The rest of the program will do everything for you</p>
          </div>
        }
        </div>
    </div> 
  )
}

export default TwoColumns