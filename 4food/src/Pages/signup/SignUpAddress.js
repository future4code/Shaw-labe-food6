import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { vaiHome } from "../../routes/Coordinator";

const SignUpAddress =()=>{
    const navigate = useNavigate()
    return(
        <div>
        <Header/>
            <p>Meu Endereço</p>
            <form>
                <input placeholder="Rua/Av."/>
                <input placeholder="Número" type="text"/>
                <input placeholder="Complemento (Ap./Bloco)"/>
                <input placeholder="Bairro" type="text"/>
                <input placeholder="Cidade" type="text"/>
                <input placeholder="Estado" typer="text"/>
                <button onClick={()=>vaiHome(navigate)}>Salvar</button>
            </form>
        </div>
    )
}

export default SignUpAddress;