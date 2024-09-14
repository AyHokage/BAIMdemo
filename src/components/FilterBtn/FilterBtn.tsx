import React, { useEffect, useState } from "react";
import styles from "./FilterBtn.module.css";
import { faXmark as xMark } from "@fortawesome/free-solid-svg-icons";
import { faSortDown as sortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

interface Props {
  title: string; 
  setUrl: any;
  active: any;
  setActive: any;
}

const FilterBtn = ({ title, setUrl, active, setActive }: Props) => {
  const checkTitle = (title: string) => {
    if (title.includes(" ")) {
     
      title = title.replace(/ /g, "%20");
    }
    return title;
  };

  const onFilter = () => {
    let url = "http://74.242.168.235/api/Product";
    if (title !== "") {
      url =
        "http://74.242.168.235/api/Product?Filters=productType%3D%3D" +
        checkTitle(title);
    }
    setUrl(url);
    setActive(title);
 
    // console.log(url);
  };

  return (
    <>
      {active === title ? (
        <button
          onClick={onFilter}
          className={`${styles.btnActive} ${nunito.className}`}
        >
          {title !== "" ? (
            <FontAwesomeIcon icon={sortDown} className={styles.icon} />
          ) : (
            <FontAwesomeIcon icon={xMark} className={styles.icon} />
          )}
          <span className={styles.title}>{title}</span>
        </button>
      ) : (
        <button
          onClick={onFilter}
          className={`${styles.btn} ${nunito.className}`}
        >
          {title !== "" ? (
            <FontAwesomeIcon icon={sortDown} className={styles.icon} />
          ) : (
            <FontAwesomeIcon icon={xMark} className={styles.icon} />
          )}
          <span className={styles.title}>{title}</span>
        </button>
      )}
    </>
  );
};

export default FilterBtn;
