import styles from './Themes.module.css'
import { Nunito } from "next/font/google";
import ExportedImage from "next-image-export-optimizer";;
import { useState } from 'react';

const nunito = Nunito({ subsets: ["latin"] });

const Themes = ({defValue, project, showMore, setShowMore}: any) => {

  return (
    <div onClick={() => setShowMore((prev:boolean) => !prev)} className={`${styles.themes} ${nunito.className}`}>
        {/* <button onClick={() => setShowMore(prev => !prev)} className={styles.more}>{showMore ? `Show less` : `Show more`} <FontAwesomeIcon icon={showMore ? faChevronDown : faChevronUp} /></button> */}
        <div className={styles.selectedTheme}>
            {defValue ? 
             <ExportedImage width={300} height={100} src={defValue} alt={defValue} className={styles.selectedTheme} /> :
             <></>
            }
        </div>
        <div className={styles.p}>
            <label className={styles.label}>Project Theme</label>
            <p>{`Click here to select a theme for ypur project (background color or background image for your project)`}</p>
        </div>
    </div>     
  )
}

export default Themes