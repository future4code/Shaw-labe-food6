import React from "react";
import { useNavigate } from "react-router-dom";
import { vaiPgRest } from "../../routes/Coordinator";

const CardRestaurant=()=>{
    const navigate = useNavigate()  
    return(
        <div>
            <img/>
            <button onClick={()=>vaiPgRest(navigate)}>NomeRestaurante</button>
            <p>tempo entrega/deliveryTime</p>
            <p>Frete/shipping</p>
        </div>
    )
}
export default CardRestaurant;