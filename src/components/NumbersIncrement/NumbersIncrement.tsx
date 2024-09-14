import styles from './NumberIncrement.module.css';
import NumberIncrement from './NumberIncrement';
import { useSelector, useDispatch } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useParams } from "next/navigation";

const NumbersIncrement = () => {

  const language = useSelector(selectLanguages).language;

  return ( 
    <div className={styles.numbers}>
        {language === 'RU' &&
        <>
          <NumberIncrement num={128} title="Проекты"></NumberIncrement>
          <NumberIncrement num={51} title="Сотрудники"></NumberIncrement>
          <NumberIncrement num={22} title="Партнеры"></NumberIncrement>
          <NumberIncrement num={81} title="Клиенты"></NumberIncrement>
        </>}

        {language === 'AZ' &&
        <>
          <NumberIncrement num={128} title="AZПроекты"></NumberIncrement>
          <NumberIncrement num={51} title="AZСотрудники"></NumberIncrement>
          <NumberIncrement num={22} title="AZПартнеры"></NumberIncrement>
          <NumberIncrement num={81} title="AZКлиенты"></NumberIncrement>
        </>}

        {language === 'EN' &&
        <>
          <NumberIncrement num={128} title="Projects"></NumberIncrement>
          <NumberIncrement num={51} title="Employees"></NumberIncrement>
          <NumberIncrement num={22} title="Partners"></NumberIncrement>
          <NumberIncrement num={81} title="Clients"></NumberIncrement>
        </>}
    </div>  
  )
}

export default NumbersIncrement