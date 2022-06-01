import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header"
import CardRestaurant from "../../Components/cardRestaurant/CardRestaurant"
import Footer from "../../Components/Footer/Footer"
import useRequestData from "../../hooks/useRequestData";

import { baseUrl } from "../../BaseUrl/baseUrl";
import { vaiPgRest } from "../../routes/Coordinator";
import CardBusca from "../../Components/cardBusca/CardBusca";

const Home=()=>{
    const navigate = useNavigate()
    const [rests, getRest] = useRequestData([], `${baseUrl}/restaurants`);

    const onClickCard = (id) => {
      vaiPgRest(navigate, id);
    };

    const restList = rests && rests.map((rest) => {
      return (
        <CardBusca
        key={rest.id}
          logoUrl={rest.logoUrl}
          name={rest.name}
          deliveryTime={rest.deliveryTime}
          shipping={rest.shipping}
        />
      );
    });

    return(
        <div>
            <Header/>
            <CardBusca/>
            <Footer/>            
        </div>
    )
}

export default Home;