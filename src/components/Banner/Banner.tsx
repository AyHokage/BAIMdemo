import ExportedImage from "next-image-export-optimizer";
import styles from "./Banner.module.css"
import Link from "next/link"
import NavBar from "../NavBar/NavBar"
import { Nunito } from "next/font/google";

const nunito = Nunito({subsets: ["latin"]});

interface Props {
  animate: boolean,
  images: string[]
}

const Banner = ({animate, images}: Props) => {
  
  

  return ( 
    <>
  
    <div className={`${styles.container} ${nunito.className}`}>
      { typeof images == 'string' 
        ? 
        <ExportedImage className={styles.carouselImage} src={images} alt="image" width={1000} height={600}   />
        :
        <>
        <ExportedImage className={animate ? styles.pc :     `${styles.activePC}`} alt='money' src={images[0]} width={600} height={450} />
        <ExportedImage className={animate ? styles.folder : `${styles.activeFolder}`} alt='folder' src={images[1]} width={300} height={300} />
        <ExportedImage className={animate ? styles.girl :   `${styles.activeGirl}`} alt='girl' src={images[2]} width={450} height={450} />
        <ExportedImage className={animate ? styles.guy :    `${styles.activeGuy}`} alt='guy' src={images[3]} width={200} height={300} />
        <ExportedImage className={animate ? styles.plant :  `${styles.activePlant}`} alt='plant' src={images[4]} width={150} height={300} />
        <Link href='#' className={animate ? styles.heading : `${styles.activeHeading}`}>BAIM Бухгалтерия для Азербайджана</Link>
        </>
      }
    </div>

    </>
  )

}

export default Banner