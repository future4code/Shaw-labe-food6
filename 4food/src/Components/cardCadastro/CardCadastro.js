import React from "react";
import { useNavigate } from "react-router-dom";
import { signupEdit } from "../../routes/Coordinator";

const CardCadastro=()=>{
    const navigate = useNavigate()
    return(
        <div>
            <p>imprime infos de nome, email e cpf cadastrados</p>
            <button onClick={()=>signupEdit(navigate)}>EDIT</button>
        </div>
    )
}
export default CardCadastro;