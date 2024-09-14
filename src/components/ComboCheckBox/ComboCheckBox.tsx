import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import styles from './ComboCheckBox.module.css';

const ComboCheckBox = ({selectedItems, setSelectedItems, handleItemClick}: any) => {
  const [isOpen, setIsOpen] = useState(true);
  

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
            <div className={styles.selectBtn} onClick={toggleOpen}> 
                <span className={styles.btnText}>Роль</span>
                <span className={styles.arrowDwn}>
                    {isOpen ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
                </span>
            </div>
            <ul className={isOpen ? styles.listItems : styles.listItemsOpen}>
                <li onClick={() => handleItemClick('Постановщик')} className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Постановщик') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Постановщик</span>
                </li>
                <li onClick={() => handleItemClick('Исполнитель')} className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Исполнитель') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Исполнитель</span>
                </li>
                <li onClick={() => handleItemClick('Соисполнитель')} className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Соисполнитель') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Соисполнитель</span>
                </li>
                <li onClick={() => handleItemClick('Наблюдатель')} className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Наблюдатель') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Наблюдатель</span>
                </li>
            </ul>
        </div>
 );
};

export default ComboCheckBox;
