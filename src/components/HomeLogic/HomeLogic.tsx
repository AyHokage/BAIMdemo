import NumbersIncrement from "@/components/NumbersIncrement/NumbersIncrement";
// import PositionRelative from "@/components/PositionRelative/PositionRelative";
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import Plan from "@/components/Plan/Plan";
import TwoColumns from "@/components/TwoColumns/TwoColumns";
import ChoiceForm from "@/components/ChoiceForm/ChoiceForm";
import CrmForm from "@/components/crmForm/CrmForm"; 
import Modules from "@/components/Modules/Modules";
import Footer from "@/components/Footer/Footer2"; 
import { Nunito } from "next/font/google";
// import Carousel from "@/components/Carousel/Carousel";
import LoadAnimation from "@/components/LoadAnimation/LoadAnimation";
import AutoplayCarousel from "@/components/SmallCarousel3/SmallCarousel3";
import styles from '../../styles/Home.module.css'
import Marquee from "@/components/Marquee/Marquee";
import NewsComponent from "@/components/News/News";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { selectLanguages, setLanguage } from '@/services/LanguagesReducer';
import { useSelector, useDispatch } from "react-redux";


const nunito = Nunito({ subsets: ["latin"] }); 

const HomeLogic = ({params}: any) => {
  const images = [["https://i.ibb.co/HqqNnwC/image-5.png", "https://i.ibb.co/k0MYFfc/ee5bd37d-0980-44bb-9418-5c8eb60bbdb5.jpg",  "https://i.ibb.co/y605RSm/151c0706-57ef-4138-a4c8-d71c1c40c5b2.jpg"], 
  ["https://i.ibb.co/VWHj7CN/image-6.png", "https://i.ibb.co/kh4LMMw/image-3.png", "https://i.ibb.co/fSMxxd0/IMG-9778.png"], 
  ["https://i.ibb.co/Ytr8VFt/image-7.png", "https://i.ibb.co/fD4mt9g/image-2.png", "https://i.ibb.co/rwQGc7c/IMG-9782.png"]];

  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState(false)

  const dispatch  = useDispatch();

  
  const language = useSelector(selectLanguages).language;

  useEffect(() => {
    if (params){
    if (params.language === 'RU'){
      dispatch(setLanguage('RU'))
    } else if (params.language === 'AZ'){
      dispatch(setLanguage('AZ'))
    } if (params.language === 'EN'){
      dispatch(setLanguage('EN'))
    }}

    console.log(params)
    
  }, [language, params])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);  // Set isLoading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timeout);  // Clear the timeout on component unmount
  }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShow(true);  // Set isLoading to false after 3 seconds
  //   }, 300);

  //   return () => clearTimeout(timeout);  // Clear the timeout on component unmount
  // }, []);


  return (
      <div className={isLoading ? styles.none : styles.showLater}>
        <PositionRelative>
          {/* <Carousel images={images} /> */}
          <NumbersIncrement /> 
          <Plan />
          <AutoplayCarousel type='clients' /> 
          <TwoColumns />    
          <ChoiceForm />
          {/* <NewsComponent /> */}
          <AutoplayCarousel type='partners' /> 
          <CrmForm />
          <div className="empty"></div>
           <Modules />
        </PositionRelative>
      </div>
  );
};

export default HomeLogic;
