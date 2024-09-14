import { useState } from 'react';
import styles from './Languages.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { selectLanguages, setLanguage } from '@/services/LanguagesReducer';
import { store } from '@/services/store';
import LanguagesLogic from '../LanguagesLogic/LanguagesLogic';
 
const Languages = () => {
  
    return ( 
      <Provider store={store} >
        <LanguagesLogic />
      </Provider>
    ); 
};

export default Languages;