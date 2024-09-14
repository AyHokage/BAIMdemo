import React, { useState, useEffect } from "react";
import accordionData from "./accordionData.json";
import styles from "./Team.module.css";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import { useSelector } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useParams } from "next/navigation";

const Team = () => {
  
  const language = useSelector(selectLanguages).language;
  const params = useParams();

  const accordeon = () => {
    if (language ==='RU' || params.language === 'RU') return accordionData.ru;
    if (language ==='EN' || params.language === 'EN') return accordionData.en;
    if (language ==='AZ' || params.language === 'AZ') return accordionData.az;
  }

  const [accordionItems, setAccordionItems] = useState(accordeon());
  const [areWorkersOpen, setAreWorkersOpen] = useState(false);
  const [buttonView, setButtonView] = useState(false); 


  const getAccordeon = () => {
    if (language ==='RU' || params.language === 'RU') setAccordionItems(accordionData.ru);
    if (language ==='EN' || params.language === 'EN') setAccordionItems(accordionData.en);
    if (language ==='AZ' || params.language === 'AZ') setAccordionItems(accordionData.az);
  }

  useEffect(() => {
    params && params.language && getAccordeon();
  }, [params])

  useEffect(() => {
    params && params.language && getAccordeon();
  }, [language, params])

  const translate = (ru: string, az: string, en: string) => {
    if (params?.language === 'RU') return ru;
    if (params?.language === 'EN') return en;
    if (params?.language === 'AZ') return az;
  }

  const toggleAllWorkers = () => {
    setAreWorkersOpen(!areWorkersOpen);
    setButtonView(true);
    const updatedAccordionItems = accordionItems && accordionItems.map((item) => {
      if (item.children) {
        item.children = item.children.map((director) => {
          director.isOpen = !areWorkersOpen;
          if (director.isOpen) {
            director.workers.forEach((worker) => (worker.isOpen = true));
          } else {
            director.workers.forEach((worker) => (worker.isOpen = false));
          }
          return director;
        });
      }
      return item;
    });
    setAccordionItems(updatedAccordionItems);
  };

  useEffect(() => {
    if (accordionItems){const updatedAccordionItems = accordionItems.map((item) => {
      item.isOpen = true;
      if (item.children) {
        item.children = item.children.map((director) => {
          director.isOpen = true;
          director.workers.forEach((worker) => (worker.isOpen = false));
          return director;
        });
      }
      return item;
    });
    setAccordionItems(updatedAccordionItems);}
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}> {params && params.language && translate('Наша Команда', 'Bizim komandamız','Our Team')}</h2>
      </div>
      <div className={styles.chart}>
        {accordionItems && accordionItems.map((item, index) => (
          <div className={styles.container} key={index}>
            <EmployeeCard name={item.name} position={item.position} />
            {item.isOpen && item.children && (
              <><div className={styles.secondContainer}>
                {item.children.map((director, directorIndex) => (
                  <div key={directorIndex}>
                    <EmployeeCard
                      name={director.name}
                      position={director.position} />

                    {(areWorkersOpen && <div className={styles.space}></div>)}
                    {director.isOpen && director.workers && (
                      <div className={styles.chart}>
                        {director.workers.map(
                          (worker, workerIndex) => worker.isOpen && (
                            <EmployeeCard
                              key={workerIndex}
                              name={worker.name}
                              position={worker.position} />
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div><div className={styles.btnContainer}>
                  <button
                    onClick={toggleAllWorkers}
                    className={`${styles.buttonToggle} ${styles.learnMore}`}
                  >
                    <span className={styles.circle} aria-hidden="true">
                      <span
                        className={areWorkersOpen
                          ? `${styles.icon} ${styles.arrowClose}`
                          : `${styles.icon} ${styles.arrowOpen}`}
                      ></span>
                    </span>
                    <span className={styles.buttonText}>
                      {params && params.language && (areWorkersOpen ? translate("Скрыть", "AZhide", "Hide") : translate("Подробнее", "azmore", "More"))}
                    </span>
                  </button>
                </div></>

            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
