import React, { useState } from "react";
import { baseUrl } from "../../../BaseUrl/baseUrl";
import axios from "axios";


    const [id, setId]=useState()
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [cpf, setCpf]=useState()
    const [hasAddress, setHasAddress]=useState()
    const [address, setAddress]=useState()
    const [users, setUsers]=useState([])


    const onChangeId =(ev)=>{
        setId(ev.target.value)
    }


    const onChangeName =(ev)=>{
        setName(ev.target.value)
    }


    const onChangeEmail =(ev)=>{
        setEmail(ev.target.value)
    }


    const onChangeCpf =(ev)=>{
        setCpf(ev.target.value)
    }


    const onChangeHasAddress =(ev)=>{
        setHasAddress(ev.target.value)
    }


    const onChangeAddress =(ev)=>{
        setAddress(ev.target.value)
    }



const ProfilePageVazia =()=>{


const handleUsers=()=>{

    const body = {
        id:"" ,
        name:"",
        email:"",
        cpf:"",
        hasAddress: "",
        address:""
    }
    axios.post(`${baseUrl}/profile`, body).then((res)=>{
        setUsers(res.data.results)
    }).catch((err)=>{
        console.log(err)
    })
    
    }


    return(
        <div>
            <h1>Meu Perfil</h1>
                <p>Nome fulano X</p>
                <p>email@email.com</p>
                <p>+55 21 9999999</p>
            <button>Editar <img src="lapis" /></button>
            <div>
                <p>Endereço Cadastrado</p>
                <p>Rua da Jujuba sabor menta-Vila Pokemon </p>
                <button>Editar <img src="/home/matheus035/labenu/labefood/Shaw-labe-food6/4food/src/Icons" /></button>
            </div>
            <h3>Histórico de pedidos</h3>
                {/* CARDS */}
        </div>
    )
}

export default ProfilePageVazia