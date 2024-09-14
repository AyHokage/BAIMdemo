import { useEffect, useState } from 'react';
import styles from './LanguagesLogic.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguages, setLanguage } from '@/services/LanguagesReducer';
 
const LanguagesLogic = () => { 

    const router = useRouter();

    const qs = router.query;

    const params = useParams();

    const dispatch = useDispatch();

    const language = useSelector(selectLanguages).language;

    const root = `${router.pathname}`;
 
    const [selectedOption, setSelectedOption] = useState<string | null>('RU');
    const [isOpen, setIsOpen] = useState(true);
    const options = ['AZ', 'RU', 'EN'];

    useEffect(() => {
        dispatch(setLanguage(language));
    }, [language]); 

    useEffect(() => {
      params && params.language && dispatch(setLanguage(params.language));
    }, [params])

    function chooseLang(pathname: string, newLanguage: string) {
    
      // Replace the language code in the pathname with the new language
      const newPathname = pathname.replace(`[language]`, `${newLanguage}`);
      if (qs.newsId){
        const finalNewsPathname = newPathname.replace(`[newsId]`, `${qs.newsId}`);
        return finalNewsPathname;
      }
      if (qs.productId){
        const finalNewsPathname = newPathname.replace(`[productId]`, `${qs.productId}`);
        return finalNewsPathname;
      } else {
        return newPathname;
      }
    }

    const originalPathname = '/AZ/products';
const newLanguage = 'RU';
const newPathname = chooseLang(originalPathname, newLanguage);


    const toggleOpen = () => {  
      setIsOpen(!isOpen);
    }; 
  
    const drawOptions = () => { 
      return options.map((option,i) => 
          <li onClick={() => {
            root.length > 0;
            dispatch(setLanguage(option));
            router.push(`${chooseLang(root, option)}`);
            
          }} key={i} className={language === option || language === option ? `${styles.selected} ${styles.item}`  : styles.item}>
              {/* <Link href={option} className={styles.itemText}>{option}</Link> */}
              <p className={styles.itemText}>{option}</p>
          </li>
      )
    };
  
    return (
      <div className={styles.container}>
          <div className={styles.selectBtn} onClick={toggleOpen}> 
                <FontAwesomeIcon className="fa-solid fa-bars" icon={faEarthAmericas} />
          </div>
          <ul className={isOpen ? styles.listItems : styles.listItemsOpen}>
              {drawOptions()}
          </ul>
      </div>
    );
};

export default LanguagesLogic;