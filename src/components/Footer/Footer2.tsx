import styles from './Footer.module.css'
import ExportedImage from "next-image-export-optimizer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareFacebook as fb} from '@fortawesome/free-brands-svg-icons'
import {faInstagram as insta} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin as linkedin} from '@fortawesome/free-brands-svg-icons'
import {faYoutube as youtube} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp as wa} from '@fortawesome/free-brands-svg-icons'
import SocialMedia from '../SocialMedia/SocialMedia';
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
   
const Footer: React.FC = () => {

  const language = useSelector(selectLanguages).language;
 
  return ( 
    <footer className={styles.footer}>

      {language==='RU' && <div className={styles.threeCols}>
        <div  className={styles.col}>
          <div  className={styles.colContent}>
            <h3 className={`${styles.heading} ${styles.mLeft}`}>Контакты</h3>
            <SocialMedia />
            <p className={`${styles.li}  ${styles.mLeft}`}>+994555292966</p>
            <p className={`${styles.li}  ${styles.mLeft}`}>sales@b.az</p>
            <ExportedImage className={`${styles.qr}  ${styles.mLeft}`} src="/qr.jpg" alt='qr-code' width={100} height={100} />
          </div>
        </div>  
        <div className={`${styles.col} ${styles.nav}`}> 
          <div className={styles.colContent}>
            <h3 className={styles.heading}>Подробнее</h3>
            <Link href={`/${language}/`} className={styles.li}>О компании</Link>
            <Link href={`/${language}/team`} className={styles.li}>Наша команда</Link>
            <Link href={`/${language}/products`} className={styles.li}>Продукты</Link>
            <Link href={`/${language}/services`} className={styles.li}>Услуги</Link>
            <Link href={`/${language}/licencies`} className={styles.li}>Лицензии</Link>
            <Link href={`/${language}/partners`} className={styles.li}>Наши партнеры</Link>
            <Link href={`/${language}/clients`} className={styles.li}>Наши клиенты</Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.colContent}>
            <h3 className={styles.heading}>Локация</h3>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.7275141618281!2d49.86937872797345!3d40.38868600221769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d17cead1fad%3A0xcd77217051b9047f!2zMTEgQmFiyZlrIFByb3NwZWt0aSwgQmFrxLE!5e0!3m2!1saz!2saz!4v1721068287343!5m2!1saz!2saz" 
              width="400" 
              height="250" 
              className={styles.map} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <p className={styles.p}>Bakı şəh. Babek prospekti, A. Guliyeva 1131, Babek Plaza</p>
          </div>
        </div>
      </div>}

      {language==='AZ' && <div className={styles.threeCols}>
        <div  className={styles.col}>
          <div  className={styles.colContent}>
            <h3 className={`${styles.heading} ${styles.mLeft}`}>Əlaqə</h3>
            <SocialMedia />
            <p className={`${styles.li}  ${styles.mLeft}`}>+994555292966</p>
            <p className={`${styles.li}  ${styles.mLeft}`}>sales@b.az</p>
            <ExportedImage className={`${styles.qr}  ${styles.mLeft}`} src="/qr.jpg" alt='qr-code' width={100} height={100} />
          </div>
        </div>  
        <div className={`${styles.col} ${styles.nav}`}> 
          <div className={styles.colContent}>
            <h3 className={styles.heading}>Daha ətraflı</h3>
            <Link href={`/${language}`}          className={styles.li}>Haqqımızda</Link>
            <Link href={`/${language}/team`}     className={styles.li}>Bizim komandamız</Link>
            <Link href={`/${language}/products`}   className={styles.li}>Məhsullar</Link>
            <Link href={`/${language}/services`}   className={styles.li}>Xidmətlər</Link>
            <Link href={`/${language}/licencies`}  className={styles.li}>Lisenziyalar</Link>
            <Link href={`/${language}/partners`} className={styles.li}>Əməkdaşlar</Link>
            <Link href={`/${language}/clients`}   className={styles.li}>Müştərilərimiz</Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.colContent}>
            <h3 className={styles.heading}>Ünvan</h3>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.7275141618281!2d49.86937872797345!3d40.38868600221769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d17cead1fad%3A0xcd77217051b9047f!2zMTEgQmFiyZlrIFByb3NwZWt0aSwgQmFrxLE!5e0!3m2!1saz!2saz!4v1721068287343!5m2!1saz!2saz" 
              width="400" 
              height="250" 
              className={styles.map} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <p className={styles.p}>Bakı şəh. Babek prospekti, A. Guliyeva 1131, Babek Plaza</p>
          </div>
        </div>
      </div>}

      {language==='EN' && <div className={styles.threeCols}>
        <div  className={styles.col}>
          <div  className={styles.colContent}>
            <h3 className={`${styles.heading} ${styles.mLeft}`}>Contacts</h3>
            <SocialMedia />
            <p className={`${styles.li}  ${styles.mLeft}`}>+994555292966</p>
            <p className={`${styles.li}  ${styles.mLeft}`}>sales@b.az</p>
            <ExportedImage className={`${styles.qr}  ${styles.mLeft}`} src="/qr.jpg" alt='qr-code' width={100} height={100} />
          </div>
        </div>  
        <div className={`${styles.col} ${styles.nav}`}> 
          <div className={styles.colContent}>
            <h3 className={styles.heading}>More details</h3>
            <Link href={`/${language}`} className={styles.li}>About us</Link>
            <Link href={`/${language}/team    `}  className={styles.li}>Our team</Link>
            <Link href={`/${language}/products`}className={styles.li}>Products</Link>
            <Link href={`/${language}/services`}className={styles.li}>Services</Link>
            <Link href={`/${language}/licencies`} className={styles.li}>Licencies</Link>
            <Link href={`/${language}/partners`}className={styles.li}>Partners</Link>
            <Link href={`/${language}/clients`}className={styles.li}>Partners</Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.colContent}>
            <h3 className={styles.heading}>Location</h3>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.7275141618281!2d49.86937872797345!3d40.38868600221769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d17cead1fad%3A0xcd77217051b9047f!2zMTEgQmFiyZlrIFByb3NwZWt0aSwgQmFrxLE!5e0!3m2!1saz!2saz!4v1721068287343!5m2!1saz!2saz" 
              width="400" 
              height="250" 
              className={styles.map} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <p className={styles.p}>Bakı şəh. Babek prospekti, A. Guliyeva 1131, Babek Plaza</p>
          </div>
        </div>
      </div>}

      <p className={styles.copyright}>Copyright @ BAIM 2024 All rights reserved</p>
    </footer>
  ); 
};

export default Footer;
