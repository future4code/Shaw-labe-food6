import React from "react";
import { useNavigate } from "react-router-dom";
import { cadastroEndereco } from "../../routes/Coordinator";

const SignUp=()=>{
    const navigate = useNavigate()
    return(
        <div>
            <p>Cadastrar</p>
            <form>
                <input placeholder="Nome e Sobrenome" type="text"/>
                <input placeholder="E-mail" type="text"/>
                <input placeholder="CPF" type="number"/>
                <input placeholder="Senha" type="password"/>
                <input placeholder="Confirme sua senha" type="password"/>
                <button onClick={()=>cadastroEndereco(navigate)}>Criar</button>
            </form>

        </div>
    )
}

export default SignUp;