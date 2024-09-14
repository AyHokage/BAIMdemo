import { Company, CompanyNew, CompanyTypeOfActivity, Partner, TypeOfActivity } from "@/types";
import styles from "./Card.module.css";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link"; 
import { useSelector } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";

interface Props {
  type: string; 
  company?: Company | null;
  partner?: Partner | null;
}  

const Card = ({ type, company, partner }: Props) => {  

  const language = useSelector(selectLanguages).language;

  const translate = (ru: string, az: string, en: string) => {
    if (language === 'RU') return ru;
    if (language === 'EN') return en;
    if (language === 'AZ') return az;
  }
   
  return (  
    <>
      {company &&(
        <div className={`${styles.horizontal}`}>
          {company.combinedImage != null ? (
          <div className={styles.container}>
            <ExportedImage
              className={styles.imgContainer}
              src={company.combinedImage}
              alt="Product image"
              width={280}
              height={220}
            />
          </div>
          ) : (
            <></>
          )}

          <div className={styles.productContent}>
            <div className={styles.productTitle}>
              <h2 className={styles.title}>{company.companyName}</h2>
            </div>
            {company &&
            company.companyTypeOfActivities &&
            company.companyTypeOfActivities.length > 0 && (
              <h6 className={styles.title}>
                {typeof company.companyTypeOfActivities[0] === 'string'
                  ? company.companyTypeOfActivities[0]
                  : ""}
              </h6>
            )}

            {company?.companyTypeOfActivities && company?.companyTypeOfActivities.length && company?.companyTypeOfActivities.map((type:any, id: any) => {
              return id!==0 && <p className={styles.desc} key={id}>
                {type}
              </p>
            })}
            <Link className={styles.link} href="/clients/1">
              {translate('Подробнее', 'azПодробнее', 'enПодробнее')}
            </Link>
          </div>
        </div>
      )}
 
      {partner && (
        <div className={`${styles.horizontal}`}>
          {partner.combinedImage != null &&
          <div className={styles.container}>
            <ExportedImage
              className={styles.imgContainer}
              src={partner.combinedImage}
              alt="Partner image"
              width={280}
              height={220}
            />
            </div>}

          <div className={styles.productContent}>
            <div className={styles.productTitle}>
              <h2 className={styles.title}>{partner.name}</h2>
            </div>
            <p className={styles.desc}>{partner.typeOfActivity}</p>
            <p className={styles.desc}>{partner.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
