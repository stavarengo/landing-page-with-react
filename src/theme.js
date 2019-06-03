import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
  },
  palette: {
    text: {
      primary: '#657189',
    },
  },
});

if (process.env.NODE_ENV !== 'produciton') {
  if (typeof window !== 'undefined') {
    window.staTheme = theme;
  }
}

export default theme;
