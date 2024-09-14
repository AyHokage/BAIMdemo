import React, { useEffect, useState } from "react";
import styles from "./SelectItemsSizeComboBox.module.css";
import ArrowDown from "@/icons/ArrowDown"; 

interface Props {
  listOfElements: string[] | [];
  title: string; 
  isOpen:boolean;
  setIsOpen:(isOpen:boolean)=>void;
}

const SelectItemsSizeComboBox = ({ listOfElements, title,isOpen,setIsOpen }: Props) => {
    const [selectedItem, setSelectedItem] = useState("");
 
   
    const handleSelect = (item: string) => {
      setSelectedItem(item);
      setIsOpen(false);
    };

    return (
      <div className={styles.container}>
        <div className={styles.selectBox}>
            <div
            className={`${styles.optionsContainer} ${isOpen ? styles.active : ""}`}
            >
            {listOfElements.map((item, index) => (
              <div className={styles.option} key={index} onClick={() => handleSelect(item)}> 
                <input type="radio" className={styles.radio} id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
          <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
            {selectedItem !== "" ? selectedItem : title} 
            <ArrowDown className={isOpen ? styles.open : styles.close} /> 
           </div>
        </div>
      </div>
    );
};

export default SelectItemsSizeComboBox;