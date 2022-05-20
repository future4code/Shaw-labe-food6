import React from 'react';
import { TelaInicialContainer } from './styled'
import ifuture from '../../Imagens/ifuture.png'
import Header from '../../Components/Header/Header';
import BarraBusca from '../../Components/BarraRestaurante/BarraBuscaRestaurante'




export const TelaInicial = () => {



    return (
         <div>
         <Header/>
         <BarraBusca/>
        <TelaInicialContainer>
         <img src ={ifuture}/> 
        </TelaInicialContainer>
        </div>

     );  
}


export default TelaInicial 