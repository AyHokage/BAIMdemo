import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowDownWideShort, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import styles from './ComboCheckBox2.module.css';

const ComboCheckBox = ({title, options, selectedItems, setSelectedItems, handleItemClick}: any) => {
  const [isOpen, setIsOpen] = useState(true);
  

  const toggleOpen = () => { 
    setIsOpen(!isOpen); 
  };

  return (
    <div className={styles.container}>
            <div className={styles.selectBtn} onClick={toggleOpen}> 
                <span className={styles.arrowDwn}>
                    {isOpen ? <FontAwesomeIcon icon={faArrowDownWideShort} /> : <FontAwesomeIcon icon={faArrowUpWideShort} />}
                </span> 
            </div>
            <ul className={isOpen ? styles.listItems : styles.listItemsOpen}>
                {options.map((op: string, i: number) => 
                    <li key={i} onClick={() => handleItemClick(op)} className={styles.item}>
                        <span className={styles.checkbox}>
                            {selectedItems.includes(op) ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                        </span>
                        <span className={styles.itemText}>{op}</span>
                    </li>
                )}
            </ul>
        </div>
 );
};

export default ComboCheckBox;
