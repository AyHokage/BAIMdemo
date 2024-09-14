import React from 'react'
import styles from './Product.module.css'
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link' 
import { Nunito } from "next/font/google";
import ReactMarkdown from 'react-markdown'; 
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguages } from '@/services/LanguagesReducer';
 
const nunito = Nunito({subsets: ["latin"]});

const Product = ({category, subcategory, product}: any) => { 

  const language = useSelector(selectLanguages).language;

  const dispatch = useDispatch();

  const translate = (ru: string, en: string, az: string) => {
    if (language === 'RU') return ru;
    if (language === 'EN') return en;
    if (language === 'AZ') return az;
  }
  
  const truncateText = (text: string, maxLength: number) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  function filterMarkdownElements(article: string) {
    const imagePattern = /!\[.*?\]\((.*?)\)/g; 
    const headingPattern = /#+\s.+/g; 
    const imageWithDescriptionPattern = /!\[.*?\]\((.*?)\)\n+/g; 

    const images = article?.match(imagePattern);
    const filteredImages = images ? images.map((image: any) => image.match(/https?:\/\/[^\)]+/)[0]) : [];

    const filteredArticleWithoutImageDescriptions = article?.replace(imageWithDescriptionPattern, '');

    const filteredArticleWithoutHeadings = filteredArticleWithoutImageDescriptions?.replace(headingPattern, '');

    return category === 'news' ?  truncateText(filteredArticleWithoutHeadings, 300) : truncateText(filteredArticleWithoutHeadings, 400);
  }
 
  const drawwDesc = () => {
    if (category == 'services' && category !== 'news') { return filterMarkdownElements(product.description) }
    if (category === 'news') {return filterMarkdownElements(product.content)}
    if (category === "products") {return filterMarkdownElements(product.desc)}
    else {return product.description}
  }


  const getLicensesOrServicesLink = (product: any) => {
    if (product.productType === translate('Услуги', 'Services', 'Xidmətlər')) return `/${language}/services`;
    if (product.productType === translate('Серверные лицензии', 'Server licenses', 'Server lisenziyaları') || translate('Пользовательские лицензии', 'User licenses', 'istifadəçi lisenziyaları')) return `/${language}/licencies`;
  } 

  return (
    <div className={`${styles.horizontal} ${nunito.className}`}>                
        {subcategory=='Новости' ? 
        <ExportedImage
          className={styles.imgContainer}
          src={product.img}
          alt="Product image" 
          width={280}
          height={220} 
        /> :
        <ExportedImage
          className={styles.imgContainer}
          src={product.combinedImage}
          alt="Product image" 
          width={280}
          height={220}
        />}
 
      <div className={styles.productContent}>
        <div className={styles.productTitle}>
          <h2 className={styles.title}>{product.name ? product.name : product.title}</h2>
        </div>

        <p className={styles.desc}>
          {drawwDesc()}
        </p>
        {(product.productType === 'Услуги' || product.productType === 'Серверные лицензии' || product.productType === 'Пользовательские лицензии') && <Link className={styles.link} href={`${getLicensesOrServicesLink(product)}`}>{translate('Подробнее', 'More', 'AZ more')}</Link>}
      </div> 
    </div>
  ) 
}

export default Product