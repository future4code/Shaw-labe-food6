import React from "react";
import { useNavigate } from "react-router-dom";
import { vaiSignup } from "../../routes/Coordinator";

const Login = ()=>{
    const navigate = useNavigate()

    return(
        <div>
            <p>Entrar</p>
            <form>
                <input placeholder="E-mail" type="text"/>
                <input placeholder="Senha" type="password"/>
                <button onClick={()=>vaiHome(navigate)}>Entrar</button>                
                <p>Não possui cadastro?</p>
                <button onClick={()=>vaiSignup(navigate)}>Clique Aqui.</button>
            </form>
        </div>
    )
}

export default Login;