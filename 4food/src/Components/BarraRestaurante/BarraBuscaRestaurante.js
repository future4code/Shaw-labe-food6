import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const BarraBusca = () => {
  
    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Pesquisa" variant="outlined" />
      
    </Box>
  );
}
export default BarraBusca 