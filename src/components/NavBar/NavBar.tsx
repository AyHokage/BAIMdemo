import NavMenu from "../NavMenu/NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone as phone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass as magnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser as user } from "@fortawesome/free-solid-svg-icons";
import { faBars as bars } from "@fortawesome/free-solid-svg-icons";
import ExportedImage from "next/image";
import styles from "./NavBar.module.css";
import { useRouter } from "next/navigation";
import { Nunito } from "next/font/google";
import Phone from "../Phone/Phone";
import WaveAnimation from "../WaveAnimation/WaveAnimation";
import NavMenu2 from "../NavMenu2/NavMenu2";
import Languages from "../Languages/Languages";
// import Languages from "../Languages/Languages";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const nunito = Nunito({subsets: ["latin"]});

function NavBar() {
  const language = useSelector(selectLanguages).language;

  const router = useRouter()
  return ( 
    <>
    <div className={`${styles.banner} ${nunito.className}`}>
      <div className={styles.wave}> 
          <div className={styles.smooth}></div>
          <WaveAnimation />
          <Phone /> 
      </div> 
      <div className={`${styles.pcAndTablet} ${nunito.className}`}>
       

          <div className={styles.row}>
            <div className={styles.column}> 
                <div>
                  <ExportedImage
                    className={styles.logo} 
                    width={500}
                    height={250} 
                    alt="BAIM logo" 
                    loader={() => "https://i.ibb.co/7zj827x/logo3.png"}
                    src="https://i.ibb.co/7zj827x/logo3.png"
                  /> 
                  <p className={`white larger`}> +994-55-529-29-66</p>
                </div>
                <div className={styles.flex}>
                  <NavMenu2 /> 
                  <Languages />
                </div>
                  {/* <Languages /> */}
            </div>
            <div className={styles.row}>

              <button onClick={() => router.push(`/${language}/login`)} className={`${styles.cabinet}`}>
                {language==='RU' && `Личный кабинет`}
                {language==='AZ' && `Şəxsi kabinet`}
                {language==='EN' && `Personal account`}
              </button>
            </div>
          </div>
      </div>

      <div className={styles.phone}>
          <div className={styles.centerFlex}>
              <div className={`${styles.centered} ${styles.textAlignCenter}`}>
                  <ExportedImage
                    className={styles.logo} 
                    width={300}
                    height={150} 
                    alt="BAIM logo" 
                    src="https://i.ibb.co/7zj827x/logo3.png"
                  /> 
                  <p className="white larger"> +994-55-529-29-66</p>
              </div>
          </div>

          <div className={styles.row}>
              {/* <button className={`${styles.whiteBtn} ${styles.menu}`}>
                <FontAwesomeIcon className="fa-solid fa-bars" icon={bars} />
              </button>  */}
              <NavMenu2 /> 

              
              <Languages />
          </div>
      </div> 
 
    </div>
    </>
  );
}

export default NavBar;
