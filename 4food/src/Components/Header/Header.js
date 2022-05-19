import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { voltar } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';



const Header = () =>{
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            align-items = "center"
            
          >
            <ArrowBackIosIcon  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
          ifuture  
          </Typography>
          
          <Button onClick={()=>voltar(navigate)} color="inherit"></Button>
    
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header 


