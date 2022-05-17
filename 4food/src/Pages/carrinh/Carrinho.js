import React from "react";

const Carrinho=()=>{
    return(
        <div>
            <p>Meu carrinho</p>
            <div>endereço entrega</div>
            <div>Endereço restaurante</div>
            <div>Card Produto</div>
            <div>Total pagamento</div>
            <div>Forma Pagamento</div>
            <button>Confirmar</button>
            {/* Alert com pedido em andamento + setar estado inicial pra limpar carrinho*/}
        </div>
    )
}

export default Carrinho;