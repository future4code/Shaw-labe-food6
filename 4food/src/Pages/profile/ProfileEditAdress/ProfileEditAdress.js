import React from "react";

const ProfileEditAdressPage =()=>{
    return(
        <div>
                    <h1>Endereço</h1>
               <form>
                <input placeholder="Logradouro" type="text"/>
                <input placeholder="Numero" type="text"/>
                <input placeholder="Complemento" type="text"/>
                <input placeholder="Bairro" type="text"/>
                <input placeholder="Cidade" type="text"/>
                <input placeholder="Estado" type="text"/>
                <button>Salvar</button>
                {/* vai para home */}
            </form>
        </div>
    )
}

export default ProfileEditAdressPage