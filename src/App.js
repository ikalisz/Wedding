import React from 'react';
import {
  HashRouter as Router
} from 'react-router-dom';
import {
  createTheme, ThemeProvider
} from '@material-ui/core/styles'
import Main from './components/main';

const theme = createTheme({
  overrides: {
    MuiTab: {
      textColorInherit: '#a13856',
      text: {

      }
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Main />
      </Router>
    </ThemeProvider>
  );
}

export default App;
