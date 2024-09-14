import { useState, useEffect } from 'react'
import styles from './News.module.css'
import ExportedImage from "next-image-export-optimizer";
import { News } from '@/types'
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import { news } from '../../../lib/data';
import { aznews } from '../../../lib/data';
import { ennews } from '../../../lib/data';
import { allnews } from '../../../lib/data';

const NewsComponent = () => {
    const [items, setItems] = useState(news);

    const language = useSelector(selectLanguages).language; 

    useEffect(() => {
      if (allnews.az && allnews.ru && allnews.en) {
        if (language === 'AZ') {
          setItems(allnews.az.map((item) => ({
            id: item.id,
            title: item.name, // Assuming 'name' should be mapped to 'title'
            content: item.content,
            combinedImage: item.combinedImage,
          })));
        } else if (language === 'EN') {
          setItems(allnews.en.map((item) => ({
            id: item.id,
            title: item.name, // Assuming 'name' should be mapped to 'title'
            content: item.content,
            combinedImage: item.combinedImage,
          })));
        } else if (language === 'RU') {
          setItems(allnews.ru.map((item) => ({
            id: item.id,
            title: item.name, // Assuming 'name' should be mapped to 'title'
            content: item.content,
            combinedImage: item.combinedImage,
          })));
        }
      }
    }, [allnews, language]);

      const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) { 
          return text.substring(0, maxLength) + "...";
        } else {
          return text;
        }
      };

      function filterMarkdownElements(article: string) {
        const imagePattern = /!\[.*?\]\((.*?)\)/g; 
        const headingPattern = /#+\s.+/g; 
        const imageWithDescriptionPattern = /!\[.*?\]\((.*?)\)\n+/g; 
    
        const images = article.match(imagePattern);
        const filteredImages = images ? images.map((image: any) => image.match(/https?:\/\/[^\)]+/)[0]) : [];
    
        const filteredArticleWithoutImageDescriptions = article.replace(imageWithDescriptionPattern, '');
    
        const filteredArticleWithoutHeadings = filteredArticleWithoutImageDescriptions.replace(headingPattern, '');
    
        return  truncateText(filteredArticleWithoutHeadings, 200);
      }

  return (
    <>
        <div className=" a fade-in"> 
            {language==='RU' && <h2 className={`${styles.centeredHeading} a fade-in`}>Новости</h2>}
            {language==='AZ' && <h2 className={`${styles.centeredHeading} a fade-in`}>Xəbərlər</h2>}
            {language==='EN' && <h2 className={`${styles.centeredHeading} a fade-in`}>News</h2>}
        </div>
        <div className={styles.twoHalves}>
            <div className="a fade-left">
                <section className={styles.half}>
                    {
                        items && items.length >0 && items.map((item: any, i) => 
                            i < 2 ?
                            <div key={i} className={styles.horizontal}> 
                                <ExportedImage className={styles.circleImg} width={200} height={200} alt='1c' src={item.combinedImage} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p className={styles.p}>{filterMarkdownElements(item.content)}</p>
                                    <a className={styles.link} href="#">{language==='RU' && 'Читать далее'} {language==='AZ' && 'Oxu'} {language==='EN' && 'Read'}</a>
                                </div>
                            </div> : <></>)
                    }
                </section>
            </div>
            <div className="a fade-right">
                <section className={styles.half}>
                    {
                        items.map((item: any, i) => 
                            i > 1 && i < 5 ?
                            <div key={i} className={styles.horizontal}> 
                                <ExportedImage className={styles.circleImg} width={200} height={200} alt='1c' src={item.combinedImage} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p className={styles.p}>{filterMarkdownElements(item.content)}</p>
                                    <a className={styles.link} href="#">{language==='RU' && 'Читать далее'} {language==='AZ' && 'Oxu'} {language==='EN' && 'Read'}</a>
                                </div>
                            </div> : <></>)
                    }
                </section> 
            </div>
        </div>
    </>
  )
}

export default NewsComponent 