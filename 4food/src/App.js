import React from 'react';
import TelaInicial from './Pages/TelaInicial/TelaInicial';
import BarraOpcao from './Components/barraOpcao/barraOpcao';
import BarraBusca from './Components/BarraRestaurante/BarraBuscaRestaurante';
import CardBusca from './Components/cardBusca/CardBusca'
import Header from './Components/Header/Header';



function App() {
  return (
   <div>

     
     
       <Header/>
     <TelaInicial/>
     <BarraBusca/>
     <BarraOpcao/>
     <CardBusca/>

     

     

   </div>
  );
}

export default App;
