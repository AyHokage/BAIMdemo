import React from 'react'
import styles from './Article.module.css'
import { Nunito } from "next/font/google";
import ReactMarkdown from 'react-markdown';

const nunito = Nunito({subsets: ["latin"]});
 

const Article = ({product}: any) => {  
  return (
      <div className={`${nunito.className} ${styles.container}`}>
        <ReactMarkdown className={`${styles.containerArticle} `}>{product.desc ? product.desc : product.content}</ReactMarkdown>
      </div>
  )
}

export default Article