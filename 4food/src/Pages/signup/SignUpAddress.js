import React from "react";
import { useNavigate } from "react-router-dom";
// import { vaiHome } from "../../routes/Coordinator";
import useForm from "../../hooks/useForm";
import {SignUpAddressFunction} from "../../services/SignUpAddressFunction";
import {useUnprotectedPage} from "../../hooks/useUnprotectedPage";


const SignUpAddress =()=>{
    // useUnprotectedPage()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [form, handleInputChange, clear]=useForm({street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})

    const onSubmit=(event)=>{
        event.preventDefault()
        SignUpAddressFunction(form, clear, navigate)
    }
    
    return(
        <div>
            <p>Meu Endereço</p>
            <form onSubmit={onSubmit}>
                <input placeholder="Rua/Av."
                required
                name={"street"}
                value={form.street}
                onChange={handleInputChange}/>
                <br/><br/>

                <input placeholder="Número" type="text"
                required
                name={"number"}
                value={form.number}
                onChange={handleInputChange}/>
                <br/><br/>

                <input placeholder="Complemento (Ap./Bloco)"
                name={"complement"}
                value={form.complement}
                onChange={handleInputChange}/>
                <br/><br/>
                <input placeholder="Bairro" type="text"
                required
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={handleInputChange}/>
                <br/><br/>
                <input placeholder="Cidade" type="text"
                required
                name={"city"}
                value={form.city}
                onChange={handleInputChange}/>
                <br/><br/>
                <input placeholder="Estado" typer="text"
                required
                name={"state"}
                value={form.state}
                onChange={handleInputChange}/>
                <br/><br/>
                <button type={"submit"}>Salvar</button>
                {/* onClick={()=>vaiHome(navigate)} */}
            </form>
        </div>
    )
}

export default SignUpAddress;