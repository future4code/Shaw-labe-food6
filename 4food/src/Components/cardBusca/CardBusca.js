import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const CardBusca = () => {
  
    return (
        
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="imagem hamburguer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Burger Vila Madalena
            </Typography>
            <Typography variant="body2" color="text.secondary">
              50-60 min frete R$6,00
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
export default CardBusca 