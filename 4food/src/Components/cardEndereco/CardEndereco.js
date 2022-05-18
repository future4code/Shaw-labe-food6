import React from "react";
import { useNavigate } from "react-router-dom";
import { addressEdit } from "../../routes/Coordinator";

const CardEndereco=()=>{
    const navigate = useNavigate()
    return(
        <div>
            <p>imprime rua, numero e bairro cadastrados</p>
            <button onClick={()=>addressEdit(navigate)}>EDIT</button>
        </div>
    )
}
export default CardEndereco;