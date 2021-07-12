import React from 'react';
import { SingIn } from './Pages/Home/SingIn'
import { Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";


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
