import { useState } from 'react'
import styles from './NavMenu2.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as bars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useEffect } from "react";

const NavMenu2 = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(true);

    const menuLanguage = useSelector(selectLanguages).language;  
   
      useEffect(() => { 
        console.log(menuLanguage)
    }, [menuLanguage])

    const options = [['О компании', '/'], ['Наш коллектив', '/team'], ['Продукты', '/products'], ['Услуги', `/services`], ['Лицензии', `/licencies`], ['Наши клиенты', '/clients'], ['Наши партнеры', '/partners'], ['Обратная связь', '/#crm'], ["Брэндбук", "/brandbook"]]
    
    const azoptions = [['Haqqımızda', '/'], ['Bizim komandamız', '/team'], ['Məhsullar', '/products'], ['Xidmətlər', `/services`], ['Lisenziyalar', `/licencies`] , ['Müştərilərimiz', '/clients'], ['Əməkdaşlar', '/partners'], ['Geribildirim', '/#crm'], ["Brandbook", "/brandbook"]]
   
    const enoptions = [['About us', '/'], ['Our team', '/team'], ['Products', '/products'], ['Services', `/services`], ['Licencies', `/licencies`] , ['Our clients', '/clients'], ['Partners', '/partners'], ['Contact us', '/#crm'], ["Brandbook", "/brandbook"]]

    const toggleOpen = () => { 
      setIsOpen(!isOpen); 
    };

    const getOptions = () => {
      if (menuLanguage === 'AZ'){
        return azoptions;
      } if (menuLanguage === 'RU'){
        return options;
      } if (menuLanguage === 'EN'){
        return enoptions;
      } else {
        return options;
      }
    }
  
    const drawOptions = () => {
      const theOptions = getOptions();

      return theOptions.map((option,i) => 
          <li key={i} className={` ${styles.item}`}>
              <Link href={`/${menuLanguage}${option[1]}`} className={styles.itemText}>{option[0]}</Link>
          </li>
      )
    }

    function toggleLanguage(menuLanguage: string) {
      if (menuLanguage === 'RU') {
        const els = document.querySelectorAll('.ru');
        els.forEach((element: any) => {
          element.style.display = 'none';
        });
      } else if (menuLanguage === 'AZ') {
        const els = document.querySelectorAll('.az')
        els.forEach((element: any) => {
          element.style.display = 'none';
        });
      } else if (menuLanguage === 'EN') {
        const els = document.querySelectorAll('.en')
        els.forEach((element: any) => {
          element.style.display = 'none';
        });
      }
    }


    useEffect(() => {
      toggleLanguage(menuLanguage)
    }, [menuLanguage])
    
  
    return (
      <div className={styles.container}>
          <div className={styles.selectBtn} onClick={toggleOpen}> 
            {menuLanguage==='AZ' && <span className={`${styles.menu} ${styles.az}`}>Menu</span>}
            {menuLanguage==='EN' && <span className={`${styles.menu} ${styles.en}`}>Menu</span>}
            {menuLanguage==='RU' && <span className={`${styles.menu} ${styles.ru}`}>Меню</span>}
            <span className={styles.white}>
              <FontAwesomeIcon className="fa-solid fa-bars" icon={bars} />
            </span>
            {/* <span className={styles.arrowDwn}>
                {isOpen ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
            </span> */}
          </div>
          <ul className={isOpen ? styles.listItems : styles.listItemsOpen}>
              {drawOptions()}
          </ul>
      </div>
    );
}

export default NavMenu2