import { Nunito } from "next/font/google"; 
import LoadAnimation from "@/components/LoadAnimation/LoadAnimation"; 
import { useEffect, useState } from "react";
import {store} from '../../services/store'
import { Provider } from "react-redux";
import HomeLogic from "@/components/HomeLogic/HomeLogic";
import { useParams } from "next/navigation";


const nunito = Nunito({ subsets: ["latin"] }); 

const HomePage = () => {
  const images = [["https://i.ibb.co/HqqNnwC/image-5.png", "https://i.ibb.co/k0MYFfc/ee5bd37d-0980-44bb-9418-5c8eb60bbdb5.jpg",  "https://i.ibb.co/y605RSm/151c0706-57ef-4138-a4c8-d71c1c40c5b2.jpg"], 
  ["https://i.ibb.co/VWHj7CN/image-6.png", "https://i.ibb.co/kh4LMMw/image-3.png", "https://i.ibb.co/fSMxxd0/IMG-9778.png"], 
  ["https://i.ibb.co/Ytr8VFt/image-7.png", "https://i.ibb.co/fD4mt9g/image-2.png", "https://i.ibb.co/rwQGc7c/IMG-9782.png"]];

  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState(false)

  const params = useParams()

  useEffect(() => { 
    const timeout = setTimeout(() => {
      setIsLoading(false);  
    }, 3000); 

    return () => clearTimeout(timeout);  
  }, []);

  return (
    <>
    {isLoading && <LoadAnimation />}

    <Provider store={store}>
      <HomeLogic params={params} />
    </Provider>
    </>
  );
};

export default HomePage;
