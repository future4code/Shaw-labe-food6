import axios from "axios"
import { baseUrl } from "../BaseUrl/baseUrl";
import { cadastroEndereco } from "../routes/Coordinator";

export const SignUpFunction = (body, clear, navigate) =>{
    axios.post (`${baseUrl}signup`, body)
    .then((res)=>{    
    localStorage.setItem("token", res.data.token)
    clear()
    cadastroEndereco(navigate)      
    })
    .catch((err)=>
    alert(err.response.data.message))

    console.log(body)
    console.log(localStorage)
}