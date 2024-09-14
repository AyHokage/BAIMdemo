
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import ProductType from "@/components/ProductType/ProductType";
import styles from "./ServicesLogic.module.css" 
import { Nunito } from "next/font/google";
import Product from "@/components/Product/Product"; 
import { useEffect, useState } from "react";
import { productTypes } from "../../../lib/data";
import { useRouter } from 'next/router';
import ExportedImage from "next/image"; 
import { services } from "../../../lib/data";
import { azservices } from "../../../lib/data";
import { enservices } from "../../../lib/data";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useParams } from "next/navigation";
 
const nunito = Nunito({subsets: ["latin"]});

const ServicesLogic = ({languages}: any) => {

  const [article, setArticle] = useState([]);

  const params = useParams();
  
  const language = useSelector(selectLanguages).language;

  useEffect(() => {
    if (params.language === 'RU'){
      setArticle(languages.ru);
    } else if (params.language === 'AZ'){
      setArticle(languages.az);
    } if (params.language === 'EN'){
      setArticle(languages.en);
    }
    
  }, [article, language, params])

  const options = ['AZ', 'RU', 'EN'];

  useEffect(() => {
    
    const reveal = () => { 
      const reveals = document.querySelectorAll(".a");

      for (var i = 0; i < reveals.length; i++) {   
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal); 
 

    return () => {
      window.removeEventListener("scroll", reveal);
    };

  }, []); 

  const showContentParts = (part: any, type: string, num: number) => {
    if (type === 'img' && part.img){
      return <ExportedImage className={`${styles.img}`} loader={() => part.img} src={part.img} alt={part.img} width={200} height={200} />
    }
    if (type === 'heading' && part.heading){
      return num ===0 ? <h1 className={styles.heading}>{part.heading}</h1> : <h2 className={styles.heading}>{part.heading}</h2>
    }
    if (type === 'article' && part.article){
      return <p className={styles.p}>{part.article}</p>
    }
    
  }

  const zigzag = (s: any, num: number) => {
    return num%2 === 1 ? 
    <>
      <div className={`${styles.sideText} `}>
        {showContentParts(s, 'heading', num)}
        {showContentParts(s, 'article', num)}
      </div>
      {showContentParts(s, 'img', num)}
    </> :
    <>
      {showContentParts(s, 'img', num)}
      <div className={`${styles.sideText} `}>
        {showContentParts(s, 'heading', num)}
        {showContentParts(s, 'article', num)}
      </div>
    </>
  }



  const showWholeContent = () => {

      return article.map((s: any, i: number) => {
        return !s.color ? 
        <div key={i} className={styles.mainContainer}>
          {showContentParts(s, 'heading', i)}
          {showContentParts(s, 'article', i)}
        </div> :
        <div key={i} className={s.color === 'gray' ? styles.grayBlock : styles.whiteBlock}>
          <div className={`${styles.mainContainer} ${styles.flex}`}>
            {zigzag(s, i)}
          </div>
        </div>
      })
   
  }

return (
<PositionRelative>

  <div className={`${styles.article} ${nunito.className}`}>
    {article && article.length > 0 && showWholeContent()}
  </div> 
   
</PositionRelative>
)
}

// export function getServerSideProps (context: any){
  
//   return {
//     props: {
//       servicesContent: {ru: services, az: azservices, en: enservices}
//     }
//   }
// }

export default ServicesLogic


