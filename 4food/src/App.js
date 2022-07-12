import { ThemeProvider } from '@emotion/react';
import Router from './Routes/router';
import React from 'react';
import theme from './Constants/theme';




function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router/>
    </ThemeProvider>
  );
}
export default App;
