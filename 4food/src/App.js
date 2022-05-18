import React from 'react';
import TelaInicial from './Pages/TelaInicial/TelaInicial';
import BarraOpcao from './Components/barraOpcao/barraOpcao';
import BarraBusca from './Components/BarraRestaurante/BarraBuscaRestaurante';
import CardBusca from './Components/cardBusca/CardBusca'
import Header from './Components/Header/Header';
import {ThemeProvider} from '@mui/material';
import theme from './Components/colors/theme';
import Footer from './Components/Footer/Footer';




function App() {
  return (
   <ThemeProvider theme={theme}>
       <Header/>
     <TelaInicial/>
     <BarraBusca/>
     <BarraOpcao/>
     <CardBusca/>
     <Footer/>

   </ThemeProvider>
   
  );
}

export default App;
