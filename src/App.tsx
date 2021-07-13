import React from 'react';
import { SingIn } from './Pages/SingIn'
import { Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";


function App() {
  return (
    <div className="App">

      <Switch>
        <Route path='/singin' component={SingIn} />
        <Route path='/' component={Home} />

      </Switch>
    </div>
  );
}


export default App;
