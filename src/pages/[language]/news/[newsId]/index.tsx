import Article from "@/components/Article/Article"
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout"
import { useEffect, useState } from "react"
import NoInfo from "@/components/NoInfo/NoInfo"
import Error from "@/components/ErrorPage/ErrorPage"
import { allnews } from "../../../../../lib/data"
import { Provider } from "react-redux"
import { store } from "@/services/store"
import NewsArticleLogic from "@/components/NewsArticleLogic/NewsArticleLogic"
import { useParams } from "next/navigation"

 
const Page = ({id}: any) => {
  const [item, setItem] = useState({})
  const [isLoaded, setIsLoaded] = useState(true);

  const params = useParams()
  
  return ( 
    <Provider store={store}>
      {params && params.newsId && <NewsArticleLogic id={params.newsId} />}
    </Provider>
  ) 
}

export default Page


