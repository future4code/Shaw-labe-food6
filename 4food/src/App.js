import React from 'react';
import TelaInicial from './Pages/TelaInicial/TelaInicial';
import BarraOpcao from './Components/barraOpcao/barraOpcao';
import BarraBusca from './Components/BarraRestaurante/BarraBuscaRestaurante';
import CardBusca from './Components/cardBusca/CardBusca'


import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";


import Header from './Components/Header/Header';



function App() {
  return (
    <div>


     
     
       <Header/>
     <TelaInicial/>
     <BarraBusca/>
     <BarraOpcao/>
     <CardBusca/>

     

     

      <Header/>
      <BarraBusca/>
      <CardBusca/>

      <GlobalState>
        <Router/>
      </GlobalState>


    </div>
  );
}

export default App;
