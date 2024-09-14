import React from 'react'
import ExportedImage from "next-image-export-optimizer";
import styles from './SmallCarousel2.module.css'

const SmallCarousel2 = () => {

  const imagesArr = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png", 
  ]

  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>Нас уже выбрали:</h2>
        <div className={styles.slider}>
        	<div className={styles.slideTrack}>

				{imagesArr.map((img, i) =>
        		<div key={i} className={styles.slide}>
        			<ExportedImage className={styles.sliderImg} src={img} height={100} width={250} alt="" />
        		</div>)}
        		
        	</div>
        </div>
    </div>
  )
}

export default SmallCarousel2



