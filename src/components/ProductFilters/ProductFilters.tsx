import React, { useEffect, useState } from "react";
import styles from "./ProductFilters.module.css";
import FilterBtn from "../FilterBtn/FilterBtn";
import { useParams } from "next/navigation";
 
interface Props {
  admin: boolean;
  setUrl: any;
  active: string;
  setActive: any;
}

const ProductFilters = ({ active, setActive, admin,setUrl }: Props) => {
  // const [active, setActive] = useState<any>(admin ? "" : "Флагманские продукты");
  const [filters, setFilters] = useState<any>([]);

  const params = useParams();
 
  const filtersLst = [
    "Флагманские продукты",
    "Услуги",
    "Пользовательские лицензии",
    "Серверные лицензии",
    "1С:ИТС",
    "",
  ];

  const rufilters = [
    "Флагманские продукты",
    "Услуги",
    "Пользовательские лицензии",
    "Серверные лицензии",
    "1С:ИТС"
  ]
  
  const enfilters = ["Flagship products", "Services", "User licenses", "Server licenses", "1C:ITS"]
  const azfilters = ["Flaqman məhsulları", "Xidmətlər", "istifadəçi lisenziyaları", "Server lisenziyaları", "1C: ITS"]

  const getLanguage = () => {
    if (params.language==='RU') return rufilters;
    if (params.language==='AZ') return azfilters;
    if (params.language==='EN') return enfilters;
  }

  const getActive = () => {
    if (params.language==='RU') return "Флагманские продукты";
    if (params.language==='AZ') return "Flaqman məhsulları";
    if (params.language==='EN') return "Flagship products";
  }

  useEffect(() => {
    const fl = getLanguage()
    const la = getActive()
    setActive(la)
    setFilters(fl)
  }, [params])

  const drawFilters = () => {
    if (admin){
    return filtersLst.map((f, i) => (
      <FilterBtn
        title={f}
        key={i}
        setUrl={setUrl}
        active={active}
        setActive={setActive}
      />
    )); } else {
      return filters.map((f: string, i: number) => (
        <FilterBtn
          title={f}
          key={i}
          setUrl={setUrl}
          active={active}
          setActive={setActive}
        />
      ));
    }
  };

  return <div className={styles.containerFilter}>{drawFilters()}</div>;
};

export default ProductFilters;
