import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import styles from "./NewsLogic.module.css" 
import { Nunito } from "next/font/google";
import Product from "@/components/Product/Product"; 
import { useEffect, useState } from "react";
import { fetchNews, selectNews, setNews } from "@/services/news/NewsReducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { selectLanguages } from "@/services/LanguagesReducer";
import { allnews } from "../../../lib/data";

const nunito = Nunito({subsets: ["latin"]}); 

const NewsLogic = () => { 
  const news = useSelector(selectNews);
  const [show, setShow] = useState(false)

  const language = useSelector(selectLanguages).language;

  const params = useParams();

  const dispatch = useDispatch();

  const toggleShow = () => {
    setShow(prev => !prev)
  } 

  const getNews = () => {
    if (language === 'RU') dispatch(setNews(allnews.ru));
    if (language === 'AZ') dispatch(setNews(allnews.az));
    if (language === 'EN') dispatch(setNews(allnews.en));
  }

  useEffect(() => {
    getNews();
  }, [language]);

  const translate = (ru: string, en: string, az: string) => {
    if (language === 'RU') return ru;
    if (language === 'EN') return en;
    if (language === 'AZ') return az;
  }

  return ( 

    <div className={`${styles.container} ${nunito.className}`}>
      <PositionRelative>
        <div className={styles.horizontal}>
          <h1 className={styles.heading}>{translate('Новости', 'News', 'Xəbərlər')}</h1>
          <button onClick={toggleShow} className={show ? styles.btnLess : styles.btn}>{show ? translate('Показать меньше', 'Show less', 'AZ show less') : translate('Показать все', 'Show more', 'AZ show more')}</button>
        </div> 
        {news && news.news && news.news.length > 0 ? 
        <div className={styles.cardsContainer}>{news.news.map((p: any, i: number) => <div className={i > 2 && !show ? styles.none : ''} key={p.id}><Product category='news' subcategory='sub' product={p} /></div>)}</div> :
        <div className={styles.containerNone}>
          <p className={styles.noProductsText}>No news yet ƪ(˘⌣˘)ʃ</p>
        </div>} 
          
      </PositionRelative>
    </div>
  )
}  

export default NewsLogic






