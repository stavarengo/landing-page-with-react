import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    button: {
      fontWeight: 700,
      fontSize: '1rem',
      // lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  palette: {
    divider: '#dae4ee',
    text: {
      primary: '#657189',
    },
    primary: {
      light: '#82ebff',
      main: '#44b9f6',
      dark: '#0089c3',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

if (process.env.NODE_ENV !== 'produciton') {
  if (typeof window !== 'undefined') {
    window.staTheme = theme;
  }
}

export default theme;
