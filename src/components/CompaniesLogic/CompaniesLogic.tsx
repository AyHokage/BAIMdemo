import Card from "@/components/Card/Card";
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import styles from "./CompaniesLogic.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Company, TypeOfActivity } from "@/types";
import NoInfo from "@/components/NoInfo/NoInfo"; 
import SideFilter from "@/components/SideFilter/SideFilter";
import Pagination from "@/components/Pagination/Pagination"; 
import SelectItemsSizeComboBox from "@/components/SelectItemsSizeComboBox/SelectItemsSizeComboBox";
import ComboCheckBox from "@/components/ComboCheckBox2/ComboCheckBox2";
import { useSelector, useDispatch } from "react-redux";
import { selectCompaniesToShow, setCompanies, setCompaniesToShow, selectCompanies, selectSelectedItems, selectTypesOfActivities, selectUrl, selectCurrentPage, selectIsOpen, selectSearchText, selectTotalCompaniesCount, selectShowPages, selectPageSize, fetchCompanies, fetchTypesOfActivities, setSelectedItems, setCurrentPage, setUrl, setIsOpen, setShowPages, setTotalCompaniesCount, setSearchText, selectFilteredCompanies, setFilteredCompanies } from "@/services/CompaniesReducer";
import { selectLanguages } from "@/services/LanguagesReducer";
import { companiesData } from "../../../lib/data";
 
const CompaniesLogic = () => {

  const companies = useSelector(selectCompanies)
  const fcompanies = useSelector(selectFilteredCompanies)
  const companiesToShow = useSelector(selectCompaniesToShow)
  const selectedItems = useSelector(selectSelectedItems)
  const typesOfActivities = useSelector(selectTypesOfActivities)
  const url = useSelector(selectUrl)
  const currentPage = useSelector(selectCurrentPage)
  const isOpen = useSelector(selectIsOpen)
  const showPages = useSelector(selectShowPages)
  const totalCompaniesCount = useSelector(selectTotalCompaniesCount)
  const pageSize = useSelector(selectPageSize)
  const searchText = useSelector(selectSearchText)
  const language = useSelector(selectLanguages).language;

  const [obj, setObj] = useState({});

  
  const ruoptions = ["Одежда", "Образование", "Такси", "Продажа оборудования", "Фонд"];
  const enoptions = ["Clothes", "Education", "Taxi", "Hardware sales", "Fond"];
  const azoptions = ["Geyimlər", "Təhsil", "Taksi", "Hardware satışı", "Fond"];

  const options = [
    {
      ru: "Одежда",
      en: "Clothes",
      az: "Geyimlər"
    },
    {
      ru: "Образование",
      en: "Education",
      az: "Təhsil"
    },
    {
      ru: "Такси",
      en: "Taxi",
      az: "Taksi"
    },
    {
      ru: "Продажа оборудования",
      en: "Hardware sales",
      az: "Hardware satışı"
    },
    {
      ru: "Фонд",
      en: "Fond",
      az: "Fond"
    }
  ];
  
  const pageSizesOptions = ["3 элемента","5 элементов","10 элементов","15 элементов","20 элементов","25 элементов"];

  const dispatch = useDispatch();
  
  const paginate = (pageNumber: number) => dispatch(setCurrentPage(pageNumber));

  const handleItemClick = (item: string) => {
    const isChecked = selectedItems.includes(item);
    const updatedItems = isChecked
      ? selectedItems.filter((selectedItem: any) => selectedItem !== item)
      : [...selectedItems, item];

    dispatch(setSelectedItems(updatedItems));
    dispatch(setCurrentPage(1));
    
  };

  const deleteFilter = (item: string) => {
    const updatedItems = selectedItems.filter(
      (selectedItem: any) => selectedItem !== item
    );

    dispatch(setSelectedItems(updatedItems));
    dispatch(setCurrentPage(1));
  };

  const deleteAllFilters = () => {
    dispatch(setSelectedItems([]));
    dispatch(setCurrentPage(1));
  };

  const getTypesList = () => {
    if (language === 'RU') return ruoptions;
    if (language === 'EN') return enoptions;
    if (language === 'AZ') return azoptions;
  };  
  
  const translate = (ru: string, az: string, en: string) => {
    if (language === 'RU') return ru;
    if (language === 'EN') return en;
    if (language === 'AZ') return az;
  }

  const translateCompanies = () => {
    if (language === 'RU') return companiesData.ru;
    if (language === 'EN') return companiesData.en;
    if (language === 'AZ') return companiesData.az;
  }

  const getCompaniesFromPage = () => {
    const filtered = fcompanies.filter((c: any, i: number) => Math.round(Math.ceil((i+1)/2)) === currentPage);
    return filtered;
  }

  const oneFilter = (f: string) => {
    const filtered = companies.filter((c: any) => c.companyTypeOfActivities.includes(f));
    return filtered;
  }

  const getFilteredCompanies = (filters: string[]) => {
    const inFilters = filters.map((f: string) => oneFilter(f));
    return inFilters;
  }

  const normalizeFiltered = (filtered: any) => {
    let arr: any[]  = [];

    filtered.forEach((element: any) => {
      element.forEach((el: any) => {
        arr.push(el)
      });
    });

    return arr;
  }

  const getNewPages = (num: number) => {
    let arr = [];

    for (let i=1; i<num+1; i++){
      arr.push(Math.round(Math.ceil(i/2)))
    }
    return arr;
  }

  const modifyObj = (ob: any, pn: number) => {
    // Create a new object based on `ob` with the `page` property updated
    return {...ob, page: pn};
  };
  
  const changePages = (newPages: number[], normalArr: any) => {
    let arr = [];
  
    for (let i=0; i<normalArr.length; i++){
      // let cp = fcompanies[i];
      // setObj(fcompanies[i]);
      arr.push(modifyObj(normalArr[i], newPages[i]));
    }
  
    return arr;
  };

  const handleSearch = (ev: any) => {
    dispatch(setSearchText(ev.target.value)); 
    dispatch(setCurrentPage(1));
    const filtered = fcompanies.filter((f: any) => f.companyName.startsWith(searchText));
    const newPages = changePages(getNewPages(filtered.length), filtered);
    dispatch(setFilteredCompanies(newPages))

    if (searchText.length === 0){
      dispatch(setFilteredCompanies(companies));
    }
  }

  useEffect(() => {
    const filtered = fcompanies.filter((f: any) => f.companyName.startsWith(searchText));
    dispatch(setFilteredCompanies(filtered))

    if (searchText.length === 0){
      dispatch(setFilteredCompanies(companies));
    }
  }, [searchText])

  useEffect(() => {
    dispatch(setCompanies(translateCompanies()));
  }, [])

  useEffect(() => {
    dispatch(setFilteredCompanies(translateCompanies()));
  }, [companies])

  useEffect(() => {
    dispatch(setCompaniesToShow(getCompaniesFromPage()));
  }, [fcompanies, currentPage])

  useEffect(() => {
    const firstFiltered = getFilteredCompanies(selectedItems);
    const final = normalizeFiltered(firstFiltered);
    const searched = searchText ? final.filter((f: any) => f.companyName.startsWith(searchText)) : final;

    dispatch(setFilteredCompanies(searched));

    if (selectedItems.length === 0 && searchText===''){
      dispatch(setFilteredCompanies(translateCompanies()))
    } 

    if (selectedItems.length === 0 && searchText.length>0){
      const filtered = companies.filter((f: any) => f.companyName.startsWith(searchText));
      dispatch(setFilteredCompanies(filtered))
    } 

  }, [selectedItems])

  useEffect(() => {
    dispatch(setCompaniesToShow(getCompaniesFromPage()));
    console.log('2',fcompanies)
  }, [selectedItems, fcompanies])

  useEffect(() => {
    dispatch(setCompanies(translateCompanies()));
    dispatch(setFilteredCompanies(translateCompanies()));
    dispatch(setCompaniesToShow(translateCompanies()));
    dispatch(setSelectedItems([]))
    
    console.log('langauage',fcompanies)
  }, [language])
  
  return (
    <PositionRelative>
      <div
        className={selectedItems.length == 0 ? styles.none : styles.showFilters}
      >
        <div onClick={deleteAllFilters} className={styles.deleteAllFilters}>
          <p className={styles.filter}>{translate('Очистить', 'Sil', 'Clear')}</p>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        {selectedItems.map((item: string, i: number) => ( 
          <div
          onClick={() => deleteFilter(item)}
          key={i}
          className={styles.deleteFilter}
          >
            <p className={styles.filter}>{item}</p>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        ))}
      </div>

      <div className={styles.horizontal}>

        <h1 className={styles.heading}>{translate('Наши клиенты:', 'Bizim müştərilər', 'Our clients')}</h1>

        <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder={translate("Поиск...", "Axtar", "Search")}
              className={styles.input}
              onChange={(ev) => {handleSearch(ev)}}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        
      </div>

      <div className={styles.clients}>

        <SideFilter
          handleItemClick={handleItemClick}
          selectedItems={selectedItems}
          options={getTypesList()}
          translate={translate}
        />
        
        {companiesToShow && companiesToShow.length > 0 ? (
          <>
            <div className={styles.containerItems}>
              <div>
                {companiesToShow.map((company: any, i: number) => (
                  <Card type="company" key={i} company={company} />
                ))}
              </div>  
              
             </div>
          </>
        ) : (
          <>
            <NoInfo title={"There are no any companies yet"} />
          </>
        )}   
      </div>  
      {fcompanies && fcompanies.length &&
        <div className={styles.paginationContainer}>
          <Pagination showPages={showPages} currentPage={currentPage} paginate={paginate} totalPages={Math.ceil(fcompanies.length / pageSize)}/>
          <button onClick={() => dispatch(setShowPages((prev: boolean) => !prev))} className={styles.adapt}>{showPages ? 'Hide the pages' : 'Show the pages'}</button>
          {/* <SelectItemsSizeComboBox listOfElements={pageSizesOptions} title="3 элемента" isOpen={isOpen} setIsOpen={setIsOpen}/> */}
        </div> }
    </PositionRelative>
  );
};
 
export default CompaniesLogic;