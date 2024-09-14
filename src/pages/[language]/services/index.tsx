import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";
import { services } from "../../../../lib/data";
import { azservices } from "../../../../lib/data";
import { enservices } from "../../../../lib/data";
import { Provider } from "react-redux";
import { store } from "@/services/store";
import ServicesLogic from '../../../components/ServicesLogic/ServicesLogic';
import { useParams } from "next/navigation";

const nunito = Nunito({subsets: ["latin"]});

const ServicesLanguage = ({ servicesContent }: any) => {

  const [languages, setLanguages] = useState({});
  const params = useParams();

  const translate = () => {
     if (params.ru) return services;
     if (params.en) return enservices;
     if (params.az) return azservices;
  }
  

useEffect(() => {
  setLanguages(translate);
}, [languages]);

  return (
    <Provider store={store}>
      {languages && <ServicesLogic languages={languages} />}
    </Provider>
  );
};

export default ServicesLanguage;