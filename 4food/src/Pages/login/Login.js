import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { vaiSignup,vaiHome } from "../../routes/Coordinator";
import CardBusca from "../../Components/cardBusca/CardBusca";

const Login = ()=>{
    const navigate = useNavigate()

    return(
        
        <div>
        <Header/>
        <CardBusca/>
    
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