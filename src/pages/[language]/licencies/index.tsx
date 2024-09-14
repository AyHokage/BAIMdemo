import { Nunito } from "next/font/google";
import { azlicencies, enlicencies, licencies } from '../../../../lib/data';
import { Provider } from "react-redux";
import { store } from "@/services/store";
import LicenciesLogic from '@/components/LicenciesLogic/LicenciesLogic';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
 
const nunito = Nunito({subsets: ["latin"]});  

const Licencies = () => { 

    const [languages, setLanguages] = useState({});

    const params = useParams();

    const translate = () => {
       if (params.ru) return licencies;
       if (params.en) return enlicencies;
       if (params.az) return azlicencies;
    }
    

  useEffect(() => {
    setLanguages(translate);
  }, [languages]);
    
    return ( 
    <Provider store={store}>
        {/* <PositionRelative> 
	    	{drawArticle()}
        </PositionRelative> */}
        <LicenciesLogic languages={languages} />
    </Provider>
    )
} 

export default Licencies
