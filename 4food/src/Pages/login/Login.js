import React from "react";
import { useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import {useUnprotectedPage} from "../../hooks/useUnprotectedPage";
import { vaiSignup } from "../../routes/Coordinator";
import {LoginFunction} from "../../services/LoginFunction";

import Header from "../../Components/Header/Header";
import { vaiSignup,vaiHome } from "../../routes/Coordinator";


const Login = ()=>{
    useUnprotectedPage()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [form, handleInputChange, clear]=useForm({email:"", password:""})

    const onSubmit=(event)=>{
    event.preventDefault()
    LoginFunction(form, clear, navigate)
    }

    return(
        
        <div>
            <Header/>
    
            <p>Entrar</p>

            <form onSubmit={onSubmit}>
                <input placeholder="E-mail" type="text"
                required
                name={"email"}
                value={form.email}
                onChange={handleInputChange}/>
                <br/><br/>

                <input placeholder="Senha" type="password"
                required
                name={"password"}
                onChange={handleInputChange}/>
                
                <button type={"submit"}>Entrar</button>                         
            </form>
            
            <p>Não possui cadastro?</p>
            <button onClick={()=>vaiSignup(navigate)}>Clique Aqui.</button>
        </div>
    )
}
export default Login;