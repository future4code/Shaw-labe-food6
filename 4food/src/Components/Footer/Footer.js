<<<<<<< HEAD
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';









const Footer = () =>{
 
  


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      >
        <Toolbar >
        <center></center>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
            
            

          >
            <HomeIcon />
            <PersonOutlineIcon />
            <AddShoppingCartIcon 
            />
          </IconButton>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >  
          </Typography>
          
          <Button  color="inherit"></Button>
    
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Footer 
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import { vaiCarrinho, vaiHome, vaiPerfil } from "../../routes/Coordinator";

const Footer=()=>{
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>vaiHome(navigate)}>Home</button>
            <button onClick={()=>vaiCarrinho(navigate)}>Carrinho</button>
            <button onClick={()=>vaiPerfil(navigate)}>Perfil</button>
        </div>
    )
}
>>>>>>> 4ccdb681c190209b4a2353c01b956fa5cd8e2fdb
