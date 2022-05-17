import React from 'react';

import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";

import Header from './Components/Header/Header';
import BarraBusca from './Components/BarraRestaurante/BarraBuscaRestaurante'
import CardBusca from './Components/cardBusca/CardBusca';



function App() {
  return (
    <div>

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
