import { createTheme } from '@mui/material';
import { neutraColor, primaryColor , secondaryColor} from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white',
    },
    text: {
        primary: neutraColor
    },
    
    secondary: {
        main: secondaryColor,
        contrastText: 'black',
    }

  },
});

export default theme