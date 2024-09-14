import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import Card from "@/components/Card/Card";
import styles from "./Partners.module.css";
import { useEffect, useState } from "react";
import NoInfo from "@/components/NoInfo/NoInfo";
import { fetchPartners } from "@/services/partners/PartnersReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectPartners, setPartners } from "@/services/partners/PartnersReducer";
import { selectIsLoading } from "@/services/partners/PartnersReducer";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useParams } from "next/navigation";
import { allpartners } from "../../../lib/data";

const PartnersLogic = () => {
  const partners = useSelector(selectPartners);
  const dispatch = useDispatch();

  const language = useSelector(selectLanguages).language;

  const params = useParams();

  // useEffect(() => { 
  //   const getPartners = async () => {
  //     await dispatch(fetchPartners() as any); 
  //   };

  //   getPartners()
  
  // }, []);

  const getPartners = () => {
    if (language === 'RU') dispatch(setPartners(allpartners.ru));
    if (language === 'AZ') dispatch(setPartners(allpartners.az));
    if (language === 'EN') dispatch(setPartners(allpartners.en));
  }

  useEffect(() => {
    getPartners();
  }, [language]);

  return (
    <PositionRelative> 
        <div className={styles.horizontal}>
          <h1 className={styles.heading}>{language==='RU' && 'Наши партнёры:'} {language==='EN' && 'Our partners:'} {language==='AZ' && 'Bizim partnyorlarımız:'}</h1>
        </div>

        {partners && partners.partners && partners.partners.length > 0 ? (
          <div className={styles.cardsContainer}>
            {partners.partners.map((partner: any, i: number) => (
              <Card type="partner" key={i} partner={partner} />
            ))}
          </div>
        ) : (
          <>
            <NoInfo title={"There are no any partners yet"} />
          </>
        )}
    </PositionRelative>
  );
};

export default PartnersLogic ;
