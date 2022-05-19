import axios from "axios"
import { baseUrl } from "../BaseUrl/baseUrl";
import { cadastroEndereco } from "../routes/Coordinator";

export const SignUpFunction = async(body, clear, navigate) =>{
    console.log(body) 
    await axios.post (`${baseUrl}signup`, body)    
    .then((res)=>{  
    localStorage.setItem ("token", res.data.token)
    console.log(res.data)
    clear()
    cadastroEndereco(navigate)      
    })   
    .catch((err)=>
    console.log(err.response))    
}

// alert(err.response.data.message))