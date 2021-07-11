import React from 'react';
import Button from '@material-ui/core/Button';
import SingIn from './Pages/Home/SingIn';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SingIn />
      </ThemeProvider>
    </div>
  );
}

export default App;
