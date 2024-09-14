import SideNavBar from "../SideNavBar/SideNavBar";
import type { AppProps } from "next/app";
import styles from "./SideBarLayout.module.css";
import { url } from "inspector";
import { useParams } from 'next/navigation';
import { projects } from "../../../lib/data";
import { Provider } from "react-redux";
import { store } from "@/services/store";
import { useEffect, useState } from "react";
import Link from "next/link";
import Authorise from "../Authorise/Authorise";


interface Props {
  children: AppProps;
}

const SideBarLayout = ({ theme, children }: any) => {
  const themes = ['/space.jpg', '/dinasaurs.jpg', '/rock.jpg', '/party.jpg', '/clouds.jpg'];
  const params = useParams();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token){
      setSignedIn(true)
    } else {
      setSignedIn(false)
    }
  }, [])
  
  return ( 
    <Provider store={store}>
      {
        signedIn ?
        <>
      <SideNavBar />
      
      <div style={{backgroundImage: `url(${theme})`}} className={theme ? styles.green : styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
      </> :
      <Authorise />
      }
    </Provider>
  );  
};

export default SideBarLayout;
