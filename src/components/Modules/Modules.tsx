import { useEffect, useState } from 'react';
import ExportedImage from "next-image-export-optimizer";;
import styles from './Modules.module.css'
import { Nunito } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";

const nunito = Nunito({subsets: ["latin"]});

const Modules = () => {
  const cModules = ['/warehouse.gif', '/hr-22.gif', '/accountant.gif', '/sales.gif'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const language = useSelector(selectLanguages).language;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cModules.length);
    }, 2000);
    return () => clearInterval(interval); 
  }, [cModules.length]);
 
  return (
  <div className={`${styles.card} ${styles.card_1} ${nunito.className}`}>
		<div className={styles.card__content}>
      {language==='RU' && <div className={styles.list}>
          <h2 className={styles.heading}>Какие модули автоматизирует 1С:</h2>
          <ul className={styles.ul}>
            <li className={currentIndex == 0 ? styles.chosen : styles.widthContent}>Склад</li>
            <li className={currentIndex == 1 ? styles.chosen : styles.widthContent}>HR</li>
            <li className={currentIndex == 2 ? styles.chosen : styles.widthContent}>Финансы и бухгалтерия</li>
            <li className={currentIndex == 3 ? styles.chosen : styles.widthContent}>Закупки и продажи</li>
          </ul>
      </div>}

      {language==='AZ' && <div className={styles.list}>
          <h2 className={styles.heading}>azКакие модули автоматизирует 1С:</h2>
          <ul className={styles.ul}>
            <li className={currentIndex == 0 ? styles.chosen : styles.widthContent}>azСклад</li>
            <li className={currentIndex == 1 ? styles.chosen : styles.widthContent}>azHR</li>
            <li className={currentIndex == 2 ? styles.chosen : styles.widthContent}>azФинансы и бухгалтерия</li>
            <li className={currentIndex == 3 ? styles.chosen : styles.widthContent}>azЗакупки и продажи</li>
          </ul>
      </div>}

      {language==='EN' && <div className={styles.list}>
          <h2 className={styles.heading}>Which modules does 1C automate:</h2>
          <ul className={styles.ul}>
            <li className={currentIndex == 0 ? styles.chosen : styles.widthContent}>Warehouse</li>
            <li className={currentIndex == 1 ? styles.chosen : styles.widthContent}>HR</li>
            <li className={currentIndex == 2 ? styles.chosen : styles.widthContent}>Finance and Bookkeeping</li>
            <li className={currentIndex == 3 ? styles.chosen : styles.widthContent}>Purchases and Sales</li>
          </ul>
      </div>}
			<figure>
				<ExportedImage className={styles.lstImg} width={300} height={300} src={cModules[currentIndex]} alt={cModules[currentIndex]} />
			</figure>
		</div>
	</div> 
  );
};

export default Modules;
