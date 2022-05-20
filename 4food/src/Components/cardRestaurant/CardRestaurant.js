import React from "react";
import { useNavigate } from "react-router-dom";
import { vaiPgRest } from "../../routes/Coordinator";
import { useState } from "react";


const CardRestaurant=()=>{
    
    const [data, setData] = useState(initialDate)
    
    const mostraLista = (props) => {
    }
    

     
    
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