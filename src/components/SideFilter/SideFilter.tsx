import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideFilter.module.css";
import { useSelector } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import Languages from "../Languages/Languages";

interface Props {
  handleItemClick: (title: string) => void;
  selectedItems: string[]; 
  options: string[] | undefined; 
  translate: (ru: string, az: string, en: string) => string | undefined;
}

const SideFilter = ({ handleItemClick, selectedItems, options, translate }: Props) => {

  const language = useSelector(selectLanguages).language;

  const getGovernmental = () => {
    if (language === 'RU') return 'Государственная';
    if (language === 'AZ') return 'azГосударственная';
    else return 'enГосударственная';
  }

  const getCommercial = () => {
    if (language === 'RU') return 'Частная';
    if (language === 'AZ') return 'azЧастная';
    else return 'enЧастная';
  }

  return (
    <div className={styles.sideFilters}>
      <h2 className={styles.filterHeading}>{translate('Фильтры:', 'Filterlər:','Filters:')}</h2>

      <h3 className={styles.filterHeading}>{translate('По виду деятельности:', 'Fəaliyyət növünə görə:', 'By type of activity:')}</h3>

      {options && options.length>0 && options.map((option, id) => (
        <div
          key={id}
          onClick={() => handleItemClick(option)}
          className={styles.checkboxContainer}
        >
          <div className={styles.item}>
            <span className={styles.checkbox}>
              {selectedItems.includes(option) ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <></>
              )}
            </span>
            <span className={styles.itemText}>{option}</span>
          </div>
        </div>
      ))}

      <h3 className={styles.filterHeading}>
        {translate('По организационно-правовой форме:', 'Təşkilati-hüquqi formada:', 'By organizational and legal form:')}
      </h3>
      <div
        onClick={() => handleItemClick(getGovernmental())}
        className={styles.checkboxContainer}
      >
        <div className={styles.item}>
          <span className={styles.checkbox}>
            {selectedItems.includes(getGovernmental()) ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <></>
            )}
          </span>
          <span className={styles.itemText}>{translate('Государственная', 'azГосударственная', 'enГосударственная')}</span>
        </div>
      </div>
      <div
        onClick={() => handleItemClick(getCommercial())}
        className={styles.checkboxContainer}
      >
        <div className={styles.item}>
          <span className={styles.checkbox}>
            {selectedItems.includes(getCommercial()) ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <></>
            )}
          </span>
          <span className={styles.itemText}>{translate('Коммерческая', 'azКоммерческая', 'enКоммерческая')}</span>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
