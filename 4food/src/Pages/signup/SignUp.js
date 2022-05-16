import React from "react";

const SignUp=()=>{
    return(
        <div>
            <p>Cadastrar</p>
            <form>
                <input placeholder="Nome e Sobrenome" type="text"/>
                <input placeholder="E-mail" type="text"/>
                <input placeholder="CPF" type="number"/>
                <input placeholder="Senha" type="password"/>
                <input placeholder="Confirme sua senha" type="password"/>
                <button>Criar</button>
                {/* vai para home? ou pagina de cadastrar endereço?*/}
            </form>

        </div>
    )
}

export default SignUp;