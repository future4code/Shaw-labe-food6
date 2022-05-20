import React from "react";
import axios from "axios";

import { baseUrl } from "../BaseUrl/baseUrl";
import { vaiHome } from "../routes/Coordinator";


export const LoginFunction = async (body, clear, navigate) =>{
    await axios.post (`${baseUrl}login`, body)
    .then((res)=>{
    localStorage.setItem("token", res.data.token)
    clear()
    vaiHome(navigate)              
    })
    .catch((err)=> alert(err.response.data.message))

    console.log(body)
    console.log(localStorage)   
}
