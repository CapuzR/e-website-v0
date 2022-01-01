import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#343d92",
      mainGradient: "linear-gradient(315deg, #5de6de 0%, #b58ecc 74%)"
    },
    secondary: {
      main: '#343d92',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
    },
  }
});

theme.typography.h1 = {
  fontSize: '2.4rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};


theme.typography.p = {
  fontSize: '1.4rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

export default theme;
