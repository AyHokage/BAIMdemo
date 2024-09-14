import CardsCarousel from "@/components/CardsCarousel/CardsCarousel"
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import ExportedImage from "next/image";
import styles from "./Clients.module.css"
import ProjectsCarousel from "@/components/ProjectsCarousel/ProjectsCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareFacebook as fb} from '@fortawesome/free-brands-svg-icons'
import {faInstagram as insta} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin as linkedin} from '@fortawesome/free-brands-svg-icons'
import {faYoutube as youtube} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp as wa} from '@fortawesome/free-brands-svg-icons'
import Employees from "@/components/Employees/Employees";
import ProjectDesc from "@/components/ProjectDesc/ProjectDesc"; 
import Footer from "@/components/Footer/Footer2";
  
const Clients = () => { 
  const images = [
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
  ];

  return ( 
    <PositionRelative>
      <div> 
        <div className={styles.desc}> 
          <div className={styles.imgAndName}>
            <ExportedImage className={styles.logo} src="/qarabag.png" alt="qarabag" width={300} height={200} />
            <div className={styles.text}>
              <h1 className={styles.heading}>Company name</h1>
              <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut velit nostrum fugiat itaque, laudantium corporis quae voluptatem fuga molestias quasi optio dolorum esse neque suscipit est repudiandae. Illo, nam minus.</p>
            </div>
          </div>
          <div className={styles.contacts}>
              <h3 className={` ${styles.mediah}`}>Контакты:</h3>
              <a className={styles.contact}><FontAwesomeIcon className={styles.ico} icon={fb} /><span className={styles.media}>Facebook</span></a><br />
              <a className={styles.contact}><FontAwesomeIcon className={styles.ico} icon={insta} /><span className={styles.media}>Instagram</span></a><br />
              <a className={styles.contact}><FontAwesomeIcon className={styles.ico} icon={linkedin} /><span className={styles.media}>Linkedin</span></a><br />
              <a className={styles.contact}><FontAwesomeIcon className={styles.ico}icon={youtube} /><span className={styles.media}>Youtube</span></a><br />
              <a className={styles.contact}><FontAwesomeIcon className={styles.ico} icon={wa} /><span className={styles.media}>Whatsapp</span></a>
          </div>
        </div>

        <ProjectsCarousel imagesArr={images} />

        <ProjectDesc />

        <Employees />

      </div>
    </PositionRelative>
  )
} 

export default Clients 