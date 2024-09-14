import ExportedImage from "next-image-export-optimizer";
import styles from './BrandBook.module.css'
import DownloadButton from '../Download/Download'
import { useSelector } from 'react-redux'
import { selectLanguages } from '@/services/LanguagesReducer'

const BrandBook = () => {

  const language = useSelector(selectLanguages).language;

  const getTitle = () => {
    if (language==='RU') return 'Скачать brandbook pdf';
    if (language==='AZ') return 'Brandbook pdf yüklə';
    if (language==='EN') return 'Download brandbook pdf';
  }

  return (
    <div className={styles.container}>
      <div className={styles.bookContainer}>
        <div className={styles.book}> 
          <div className={styles.back}></div>
          <div className={styles.page6}>
            <ExportedImage className={styles.img} src='/page3.png' alt='brandbook' width={220} height={150} />
            <ExportedImage className={styles.img} src='/page4.png' alt='brandbook' width={220} height={150} />
            </div>
          <div className={styles.page5}>
            <ExportedImage className={styles.img} src='/page1.png' alt='brandbook' width={220} height={150} />
            <ExportedImage className={styles.img} src='/page2.png' alt='brandbook' width={220} height={150} />
            </div>
          <div className={styles.page4}></div>
          <div className={styles.page3}></div>
          <div className={styles.page2}></div>
          <div className={styles.page1}></div>
          <div className={styles.front}>
            <ExportedImage className={styles.frontImg} src='/book.png' alt='brandbook' width={250} height={350} />
            </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1>BAIM Brandbook</h1>
        <p>
          {language==='EN' && 'ENLorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum ducimus tempore nobis ipsa labore maxime sequi eligendi numquam inventore nemo quidem facilis rerum est molestias, a iure voluptates esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias dolorum aliquam dolores sunt atque accusamus sapiente eius modi, laboriosam, magnam incidunt praesentium, assumenda quibusdam facere consequatur odio eveniet neque.'}
          {language==='AZ' && 'AZLorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum ducimus tempore nobis ipsa labore maxime sequi eligendi numquam inventore nemo quidem facilis rerum est molestias, a iure voluptates esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias dolorum aliquam dolores sunt atque accusamus sapiente eius modi, laboriosam, magnam incidunt praesentium, assumenda quibusdam facere consequatur odio eveniet neque.'}
          {language==='RU' && 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum ducimus tempore nobis ipsa labore maxime sequi eligendi numquam inventore nemo quidem facilis rerum est molestias, a iure voluptates esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias dolorum aliquam dolores sunt atque accusamus sapiente eius modi, laboriosam, magnam incidunt praesentium, assumenda quibusdam facere consequatur odio eveniet neque.'}
        
        </p>
        <DownloadButton title={`${getTitle()}`} />
      </div>
    </div>
  )
}

export default BrandBook