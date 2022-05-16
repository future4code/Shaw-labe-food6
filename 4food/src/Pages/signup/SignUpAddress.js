import React from "react";

const SignUpAddress =()=>{
    return(
        <div>
            <p>Meu Endereço</p>
            <form>
                <input placeholder="Rua/Av."/>
                <input placeholder="Número" type="text"/>
                <input placeholder="Complemento (Ap./Bloco)"/>
                <input placeholder="Bairro" type="text"/>
                <input placeholder="Cidade" type="text"/>
                <input placeholder="Estado" typer="text"/>
                <button>Salvar</button>
                {/* vai pra home */}
            </form>
        </div>
    )
}