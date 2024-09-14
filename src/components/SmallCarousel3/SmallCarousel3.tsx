import React, { useEffect, useState } from "react";
import styles from "./SmallCarousel3.module.css";
import Marquee from "../Marquee/Marquee";
import ExportedImage from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";

interface Props {
  type: string
}

export default function AutoplayCarousel({type}: Props) {
  const [carouselData, setCarouselData] = useState<any>([]);
  const [partnersImgs, setPartnersImgs] = useState<any>(['/bakinity.png', '/pasaBank.jpg', '/kapitalBank.jpg', '/xalqBank.jpg', '/pn.jpg', '/effectorSaver.jpg', '/3cx.jpg'])
  const [clientsImgs, setClientsImgs] = useState<any>(['/1cLogo.png', '/amcham.png', '/qarabag.png', '/mobis.png', '/port.jpg', '/logo.jpg', '/cpm.jpg', '/sd.jpg', '/expo.jpg'])

  const language = useSelector(selectLanguages).language;



  const getImages = (imagesOnly: string[]) => {

    if (imagesOnly.length ){
      imagesOnly.forEach((img: string) => imagesOnly.push(img))
      type=='clients' ? setClientsImgs(imagesOnly) : setPartnersImgs(imagesOnly)
    } else {
      type=='clients' ? setClientsImgs(imagesOnly) : setPartnersImgs(imagesOnly)
    } 
  }

  const fetchClients = async() => {
    try {
      const response = await fetch('http://74.242.168.235/api/Company?page=1&pageSize=10')
      const res = await response.json()
      const companies = res.companies
      const clients = companies.map((p: any) => p.combinedImage)
      getImages(clients)
    } catch (err){
      console.error(err)
    }
  }

  const fetchPartners = async() => {
    try {
      const response = await fetch('http://74.242.168.235/api/Partner/Partners')
      const res = await response.json()
      
      const partners = res.map((p: any) => p.combinedImage)
      getImages(partners)
    } catch (err){
      console.error(err)
    }
  }


  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (type === 'partners') {
      
      fetchPartners();
      console.log(partnersImgs)
    } else {
      fetchClients()
      console.log(clientsImgs)
    }}, 5000)

    return () => clearTimeout(timeOut);
  }, []);

  // useEffect(() => {
    
  //   console.log('jj')
  // }, [carouselData])
  

  return (
    
    <div className={styles.container}>
      
      {language==='RU' && <h2 className={styles.heading}>Нас уже выбрали:</h2>}
      {language==='AZ' && <h2 className={styles.heading}>azНас уже выбрали:</h2>}
      {language==='EN' && <h2 className={styles.heading}>We have already been chosen by:</h2>}
      <div className={styles.marquee}>
        <Marquee>       
          {
            type == 'partners' ? partnersImgs.map((img: string, i: number) => <ExportedImage key={i} className={styles.sliderImg} src={img} height={100} width={250} alt="" />) :
            clientsImgs.map((img: string, i: number) => <ExportedImage key={i} className={styles.sliderImg} src={img} height={100} width={250} alt="" />)
          }
          {/* <ExportedImage className={styles.sliderImg} src={"/qarabag.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/bakinity.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/1clogo.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/mobis.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/amcham.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/qarabag.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/bakinity.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/1clogo.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/mobis.png"} height={100} width={250} alt="" />
          <ExportedImage className={styles.sliderImg} src={"/amcham.png"} height={100} width={250} alt="" /> */}
        </Marquee>
      </div>
    </div>

  );
}