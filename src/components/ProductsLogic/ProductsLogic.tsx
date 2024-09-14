import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import styles from "./ProductsLogic.module.css" 
import { Nunito } from "next/font/google";
import Product from "@/components/Product/Product"; 
import { useEffect, useState } from "react";
import ProductFilters from "@/components/ProductFilters/ProductFilters";
import ComboboxAgile from "@/components/ComboboxAgile/ComboboxAgile";
import { fetchProducts, selectProducts, selectUrl, setProducts } from "@/services/ProductsReducer";
import { useSelector, useDispatch } from "react-redux";
import { setUrl } from "@/services/ProductsReducer";
import { useParams } from "next/navigation";
import { ruProducts, enProducts, azProducts } from "../../../lib/data";

const nunito = Nunito({subsets: ["latin"]});  

const ProductsLogic = () => { 
   
  const admin = false;
  const [active, setActive] = useState<any>(admin ? "" : "Флагманские продукты");

  const products = useSelector(selectProducts);
  const url = useSelector(selectUrl);
  const params = useParams();
  // const language = params.language;
  
  const dispatch = useDispatch();

  const getProducts = async() => {
    const allProducts = await dispatch(fetchProducts(url) as any); 
    console.log(allProducts)
  }

  const changeUrl = (newUrl: string) => {
    dispatch(setUrl(newUrl));
  }

  const ruoptions = ["Флагманские продукты", "Услуги", "Пользовательские лицензии", "Серверные лицензии", "1С:ИТС"]
  const enoptions = ["Flagship products", "Services", "User licenses", "Server licenses", "1C:ITS"]
  const azoptions = ["Flaqman məhsulları", "Xidmətlər", "istifadəçi lisenziyaları", "Server lisenziyaları", "1C: ITS"]
  
  // useEffect(() => {
  //   getProducts()
  //   console.log(products)
  // }, [url]); 

  const filterProducts = () => {
    if (params?.language === 'RU'){
        const filtered = ruProducts.filter((p: any) => p.productType === active);
        dispatch(setProducts(filtered));
    }

    if (params?.language === 'AZ'){
        const filtered = azProducts.filter((p: any) => p.productType === active);
        dispatch(setProducts(filtered));
    }

    if (params?.language === 'EN'){
        const filtered = enProducts.filter((p: any) => p.productType === active);
        dispatch(setProducts(filtered));
    }
  }

  useEffect(() => {
    filterProducts();
  }, [active])

  return ( 
    <PositionRelative>
      <div className={styles.horizontal}>
        {params?.language==='RU' && <h1 className={styles.heading}>Наши продукты:</h1>}
        {params?.language==='EN' && <h1 className={styles.heading}>Our products:</h1>}
        {params?.language==='AZ' && <h1 className={styles.heading}>Bizim məhsulları:</h1>}
        <div className={styles.bigFilters}><ProductFilters active={active} setActive={setActive} admin={false} setUrl={changeUrl} /></div>
        {params?.language==='RU' && <div className={styles.smallFilters}><ComboboxAgile options={ruoptions} onSelect={changeUrl} /></div>}
        {params?.language==='EN' && <div className={styles.smallFilters}><ComboboxAgile options={enoptions} onSelect={changeUrl} /></div>}
        {params?.language==='AZ' && <div className={styles.smallFilters}><ComboboxAgile options={azoptions} onSelect={changeUrl} /></div>}
      </div> 
      {products && products.length > 0 ? 
      <div className={styles.cardsContainer}>{products.map((p: any, i: number) => <Product category='products' subcategory='sub' key={p.id} product={p} />)}</div> :
      <div className={styles.containerNone}>
        <p className={styles.noProductsText}>No products yet ƪ(˘⌣˘)ʃ</p> 
      </div>}
    </PositionRelative>
  )
}  

export default ProductsLogic



