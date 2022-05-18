import React from "react";
import { useNavigate } from "react-router-dom";
import { vaiCarrinho, vaiHome, vaiPerfil } from "../../routes/Coordinator";

const Footer=()=>{
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>vaiHome(navigate)}>Home</button>
            <button onClick={()=>vaiCarrinho(navigate)}>Carrinho</button>
            <button onClick={()=>vaiPerfil(navigate)}>Perfil</button>
        </div>
    )
}