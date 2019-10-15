import React from 'react';
import './App.css';
import styled from 'styled-components'

const Header = styled.header`
background-color:red;
height:50px;
width:100%;
position:fixed;
top:0;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

function App() {
  return (
    <div className="App">
    <Header>
      <h1>Fads through the decades</h1>
    </Header>
    </div>
  );
}

export default App;
