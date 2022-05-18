import React from "react";
import { useNavigate } from "react-router-dom";
// import { cadastroEndereco } from "../../routes/Coordinator";
// import {useUnprotectedPage} from "../../hooks/useUnprotectedPage";
import useForm from "../../hooks/useForm";
import {SignUpFunction} from "../../services/SignUpFunction";

const SignUp=()=>{
    // useUnprotectedPage()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [form, handleInputChange, clear]=useForm({name:"", email:"", cpf:"", password:""})

    const onSubmit=(event)=>{
        event.preventDefault()
        SignUpFunction(form, clear, navigate)
    }

    return(
        <div>
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

                <input placeholder="CPF" type="text"
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

                <button type={"submit"}>Criar</button>
                {/* onClick={()=>cadastroEndereco(navigate)} */}
            </form>

        </div>
    )
}

export default SignUp;