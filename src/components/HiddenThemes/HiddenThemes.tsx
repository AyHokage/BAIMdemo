import styles from './HiddenThemes.module.css';
import { Nunito } from "next/font/google";
import ExportedImage from "next-image-export-optimizer";
import { useState, useRef } from 'react';
 
const nunito = Nunito({ subsets: ["latin"] });

const HiddenThemes = ({theme, setTheme, showMore, setShowMore, project, setProject}: any) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageBase64, setImageBase64] = useState("");
  const prevImageBase64 = useRef("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader(); 
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setProject({...project, theme: URL.createObjectURL(file)});
          setShowMore((prev: boolean) => !prev)
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChoose = () => {
    setProject({...project, theme: theme});
    setShowMore((prev: boolean) => !prev)
  }

  const handleCancel = () => {
    setShowMore((prev: boolean) => !prev)
  }

  return (
    <div className={showMore ? styles.container : styles.none}>
        <h2 className={styles.label}>Our themes:</h2>
        <div className={styles.themes}>
          <ExportedImage width={300} height={100} src='/dinasaurs.jpg' alt='dinasaurs theme' className={theme === '/dinasaurs.jpg' ? styles.chosenRadioImg : styles.radioImg} onClick={() => {setTheme('/dinasaurs.jpg'); console.log(project)}} />
          <ExportedImage width={300} height={100} src='/space.png' alt='space theme' className={theme === '/space.png' ? styles.chosenRadioImg : styles.radioImg} onClick={() => setTheme('/space.png')} />               
          <ExportedImage width={300} height={100} src='/clouds.jpg' alt='clouds theme' className={theme === '/clouds.jpg' ? styles.chosenRadioImg : styles.radioImg} onClick={() => setTheme('/clouds.jpg')} />
          <ExportedImage width={300} height={100} src='/confetti.png' alt='clouds theme' className={theme === '/confetti.png' ? styles.chosenRadioImg : styles.radioImg} onClick={() => setTheme('/confetti.png')} />
          <ExportedImage width={300} height={100} src='/party.jpg' alt='clouds theme' className={theme === '/party.jpg' ? styles.chosenRadioImg : styles.radioImg} onClick={() => setTheme('/party.jpg')} />
          <ExportedImage width={300} height={100} src='/hearts.jpg' alt='clouds theme' className={theme === '/hearts.jpg' ? styles.chosenRadioImg : styles.radioImg} onClick={() => setTheme('/hearts.jpg')} />
        </div>
        <div className={styles.btns}>
            <button onClick={handleChoose} className={`${nunito.className} ${styles.choose} ${styles.btn}`}>Choose</button>
            <button onClick={handleCancel} className={`${nunito.className} ${styles.cancel} ${styles.btn}`}>Cancel</button>
            <label htmlFor="file" className={styles.upload}>
              Upload your image
            </label>
            <input className={`${nunito.className} ${styles.none}`} type="file" id="file" onChange={handleImageChange} />

            {/* <button onClick={handleImageChange} className={`${nunito.className} ${styles.own} ${styles.btn}`}>Upload your own image</button> */}
        </div>    
    </div>
  )
}

export default HiddenThemes