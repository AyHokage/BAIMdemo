import {store} from '../../../services/store';
import { Provider } from "react-redux";
import CompaniesLogic from "@/components/CompaniesLogic/CompaniesLogic";
 
const Clients = () => {
  
  return (
    <Provider store={store}>
      <CompaniesLogic />
    </Provider>
  );
};
 
export default Clients;

