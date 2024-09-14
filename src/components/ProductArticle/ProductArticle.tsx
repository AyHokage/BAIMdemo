import Article from "@/components/Article/Article"
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout"
import { useEffect, useState } from "react"
import NoInfo from "@/components/NoInfo/NoInfo"
import Error from "@/components/ErrorPage/ErrorPage"
import { ruProducts, enProducts, azProducts } from "../../../lib/data"
import { useDispatch, useSelector } from "react-redux"
import { selectLanguages } from "@/services/LanguagesReducer"
import { selectNews, selectArticle, setNews } from "@/services/news/NewsReducer"
 
const ProductArticle = ({id}: any) => {
  const [item, setItem] = useState({})
  const [isLoaded, setIsLoaded] = useState(true);
  const news = useSelector(selectNews).news

  const language = useSelector(selectLanguages).language;

  const dispatch = useDispatch();

  const getNews = () => {
    if (language === 'RU') dispatch(setNews(ruProducts));
    if (language === 'AZ') dispatch(setNews(azProducts));
    if (language === 'EN') dispatch(setNews(enProducts));
  }

  useEffect(() => {
    getNews();

  }, [language]);

  useEffect(() => {
    const found = news.find((n: any) => n.id === Number(id));
    news && news.length>0 && setItem(found)
    console.log(found)
  }, [news, language])
 
  // const fetchProduct = async() => {
  //   try {
  //   const response = await fetch(`http://74.242.168.235/api/NewsById/${id}`);
  //   const res = await response.json();
  //   setItem(res)  
  //   console.log(res)
  //   } catch (err){
  //     console.error(err) 
  //   }
  // }

  // useEffect(() => {
  //   fetchProduct()
  // }, [])


  console.log(id)

  
  
  return ( 
    <>
      {isLoaded ?
      <PositionRelative>
          {
            item ? 
            <>
            <Article product={item} /></>
            : <NoInfo />
          }
      </PositionRelative> :
      <Error />
      }
    </>
  ) 
}

export default ProductArticle

