import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header"
import CardRestaurant from "../../Components/cardRestaurant/CardRestaurant"
import Footer from "../../Components/Footer/Footer"

const Home=()=>{
    const navigate = useNavigate()
    const [rests, getRest] = useRequestData([], `${baseUrl}/restaurants`);

    const onClickCard = (id) => {
        vaiPgRest (navigate, id);
      };

      const restList =
      rests &&
      rests.map((rest) => {
      return (
        <CardBusca
          logoUrl={rest.id}
          name={rest.id}
          deliveryTime={rest.deliveryTime}
          shipping={}
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