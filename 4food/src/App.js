import React from 'react';
import Header from './Components/Header/Header';
import BarraBusca from './Components/BarraRestaurante/BarraBuscaRestaurante'
import CardBusca from './Components/cardBusca/CardBusca';


function App() {
  return (
   <div>
     <Header/>
     <BarraBusca/>
     <CardBusca/>
   </div>
  );
}

export default App;
