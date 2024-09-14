import { Provider } from "react-redux";
import {store} from '../../../services/store'
import PartnersLogic from "@/components/Partners/Partners";

const Partners = () => {
  

  return ( 
    <Provider store={store}>
      <PartnersLogic />  
    </Provider>
  );
  
};

export default Partners;
