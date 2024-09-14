import Article from "@/components/Article/Article"
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout"
import { useEffect, useState } from "react"
import NoInfo from "@/components/NoInfo/NoInfo"
import Error from "@/components/ErrorPage/ErrorPage"
import LoadAnimation from "@/components/LoadAnimation/LoadAnimation"
import { Provider } from "react-redux"
import { store } from "@/services/store"
import ProductArticle from "@/components/ProductArticle/ProductArticle"
import { useParams } from "next/navigation"

 
const Page = () => {


  const params = useParams()
  
  return ( 
    <Provider store={store}>
      {params && params.productId && <ProductArticle id={params.productId} />}
    </Provider>
  ) 
}

export default Page

