import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import styles from "./ComboboxAgile.module.css";
 
interface ComboboxProps {
  options: string[];
  onSelect: (value: string) => void;
  theme?: string;
  title?: string;
}
 
const ComboboxAgile: React.FC<ComboboxProps> = ({ options, onSelect, theme, title }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  
 
  const toggleOpen = () => { 
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect('http://74.242.168.235/api/Product?Filters=productType%3D%3D' + option); 
  }; 

  const drawOptions = () => {
    return options.map((option,i) => 
        <>{selectedOption===option ? 
        <li key={i}  onClick={() => handleSelect(option)} className={theme === undefined ? `${styles.selected} ${styles.item}` : `${styles.selected} ${styles.blueItem}`}>
            <span className={styles.itemText}>{option}</span>
        </li>
        :
        <li key={i}  onClick={() => handleSelect(option)} className={theme === undefined ? styles.item : styles.blueItem}>
            <span className={styles.itemText}>{option}</span>
        </li> }</>
    )
  }

  return (
    <div className={styles.container}>
            <div className={theme === undefined ? styles.selectBtn : styles.blueSelectBtn} onClick={toggleOpen}> 
                <span className={theme === undefined ? styles.btnText : styles.blueBtnText}>{title === undefined ? 'Вид продукта' : title}</span>
                <span className={theme === undefined ? styles.arrowDwn : styles.blueArrowDwn}>
                    {isOpen ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
                </span>
            </div>
            <ul className={isOpen ? styles.listItems : styles.listItemsOpen}>
                {drawOptions()}
            </ul>
        </div>
  );
};

export default ComboboxAgile;
