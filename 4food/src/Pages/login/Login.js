import React from "react";

const Login =()=>{
    return(
        <div>
            <p>Entrar</p>
            <form>
                <input placeholder="E-mail" type="text"/>
                <input placeholder="Senha" type="password"/>
                <button>Entrar</button>
                {/* vai para home */}
            </form>
        </div>
    )
}