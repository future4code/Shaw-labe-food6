import React, { useLayoutEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { cadastroEndereco } from "../../routes/Coordinator";


import useForm from "../../hooks/useForm";
import { baseUrl } from "../../BaseUrl/baseUrl";
// import {SignUpFunction} from "../../services/SignUpFunction";

const SignUp=()=>{
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [form, handleInputChange, clear]=useForm({name:"", email:"", cpf:"", password:""})

    const SignUpFunction = async(body, clear, navigate) =>{
        console.log(body) 
        await axios.post (`${baseUrl}signup`, body)    
        .then((res)=>{  
        localStorage.setItem ("token", res.data.token)
        console.log(res.data)
        clear()
        cadastroEndereco(navigate)      
        })   
        .catch((err)=>
        alert(err.response.data.message))    
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        SignUpFunction(form, clear, navigate)
    }

    // useLayoutEffect(()=>{
    //     const token = localStorage.getItem("token")
    //     if(token){
    //         cadastroEndereco(navigate)
    //     }
    // },[navigate])    
       
       
    return(
        <div>
            <Header/>
       
            <p>Cadastrar</p>

            <form onSubmit={onSubmit}>
                <input placeholder="Nome e Sobrenome" type="text"
                required
                name={"name"}
                value={form.name}
                onChange={handleInputChange}/>
                <br/><br/>

                <input placeholder="E-mail" type="text"
                required
                name={"email"}
                value={form.email}
                onChange={handleInputChange}/>
                <br/><br/>

                <input placeholder="CPF (111.111.111-11)" type="text"
                name={"cpf"}
                value={form.cpf}
                onChange={handleInputChange}/>
                <br/><br/>

                <input placeholder="Senha" type="password"/>                
                <br/><br/>

                <input placeholder="Confirme sua senha" type="password"
                required
                name="password"
                value={form.password}
                onChange={handleInputChange}/>
                <br/><br/>

                <button type={"submit"}>Criar</button>
                {/* onClick={()=>cadastroEndereco(navigate)} */}
            </form>
        </div>
    )
}

export default SignUp;