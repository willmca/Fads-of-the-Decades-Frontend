import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import Eighty from './components/80s/80s';
import Ninety from './components/90s/90s';
import Thousand from './components/00s/00s';
import Ten from './components/10s/10s';

function App() {
  return (
    <div className="App">
      <main>
        <Route path ="/" exact render={props => <Home {...props}/>}/>
        <Route path ="/80s" exact render={props => <Eighty {...props}/>}/>
        <Route path ="/90s" exact render={props => <Ninety {...props}/>}/>
        <Route path ="/00s" exact render={props => <Thousand {...props}/>}/>
        <Route path ="/10s" exact render={props => <Ten {...props}/>}/>
      </main>
    </div>
  );
}

export default App;
