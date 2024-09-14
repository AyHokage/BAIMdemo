import {store} from '../../../services/store';
import { Provider } from "react-redux";
import ProductsLogic from "@/components/ProductsLogic/ProductsLogic";

const MenuCategoryDetails = () => {
  return ( 
    <Provider store={store}>
      <ProductsLogic />
    </Provider> 
  ) 
}  

export default MenuCategoryDetails  