import { Nunito } from "next/font/google";
import {store} from '../../../services/store';
import { Provider } from "react-redux";
import NewsLogic from "@/components/NewsLogic/NewsLogic";

const nunito = Nunito({subsets: ["latin"]}); 

const MenuCategoryDetails = () => { 

  return ( 
    <Provider store={store}>
      <NewsLogic />
    </Provider>  
    )
}  

export default MenuCategoryDetails


