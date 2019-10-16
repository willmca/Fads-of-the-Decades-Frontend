import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Ninety from './components/90s/90s';
import Thousand from './components/00s/00s';
import Ten from './components/10s/10s';
import styled from 'styled-components'

const Header = styled.nav`
background-color:RGB(119, 157, 218);
display:flex;
flex-direction:row;
align-items:center;
height:50px;
`

function App() {
  return (
    <div className="App">
         <Header>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/90s" className="navLink">90s</Link>
            <Link to="/00s" className="navLink">00s</Link>
            <Link to="/10s" className="navLink">10s</Link>
            <h1 className="fads">Fads Through the Decades</h1>
            </Header>
      <main>
        <Route path ="/" exact render={props => <Home {...props}/>}/>
        <Route path ="/90s" exact render={props => <Ninety {...props}/>}/>
        <Route path ="/00s" exact render={props => <Thousand {...props}/>}/>
        <Route path ="/10s" exact render={props => <Ten {...props}/>}/>
      </main>
    </div>
  );
}

export default App;
