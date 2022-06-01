import React, { useState } from "react";


const [logradouro, setLogradouro]=useState()
const [numero, setNumero]=useState()
const [complemento, setComplemento]=useState()
const [bairro, setBairro]=useState()
const [cidade, setCidade]=useState()
const [estado, setEstado]=useState()

const onChangeLogradouro=(ev)=>{
    setLogradouro(ev.target.value)
}

const onChangeNumero=(ev)=>{
    setNumero(ev.target.value)
}

const onChangeComplemento=(ev)=>{
    setComplemento(ev.target.value)
}


const onChangeBairro=(ev)=>{
    setBairro(ev.target.value)
}

const onChangeCidade=(ev)=>{
    setCidade(ev.target.value)
}

const onChangeEstado=(ev)=>{
    setEstado(ev.target.value)
}



const body = {

    id:fdfdfd ,
    name:fdfsdf ,
    email:fdsfsd ,
    cpf: fdfdf,
    hasAddress: dsds,
    address:jhh
}
/*
try{
    
    const response= await axios.put(`${baseUrl}/profile`, body)
    localStorage.setItem("token",response.data.token)
    {goToFeedPage(navigate)}
  }

  try{
    
    const response= await axios.get(`${baseUrl}/profile/address`, body,auth)
    localStorage.setItem("token",response.data.token)
    {goToFeedPage(navigate)}
  }



axios.put(`${baseUrl}`, body).then((res)=>{
    set(res.data.results)
  }).catch((err)=>{
    console.log(err)
  })
 
},[])

*/


const ProfileEditAdressPage =()=>{


    return(
        <div>
                    <h1>Endereço</h1>
               <form>
                <input placeholder="Logradouro" type="text" onChange={onChangeLogradouro} />
                <input placeholder="Numero" type="text" onChange={onChangeNumero}/>
                <input placeholder="Complemento" type="text" onChange={onChangeComplemento}/>
                <input placeholder="Bairro" type="text" onChange={onChangeBairro}/>
                <input placeholder="Cidade" type="text" onChange={onChangeCidade}/>
                <input placeholder="Estado" type="text" onChange={onChangeEstado}/>
                <button>Salvar</button>
                {/* vai para home */}
            </form>
        </div>
    )
}

export default ProfileEditAdressPage