import React from "react";

const ProfilePageVazia =()=>{
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
                <button>Editar <img src="lapis" /></button>
            </div>
            <h3>Histórico de pedidos</h3>
                {/* CARDS */}
        </div>
    )
}

export default ProfilePageVazia