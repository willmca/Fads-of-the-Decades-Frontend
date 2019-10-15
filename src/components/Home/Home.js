import React from 'react';
import './Home.css';
import styled from 'styled-components'
import {Link} from "react-router-dom";


function Home(){
    return (
        <div className="Home">
            <h1>Home page</h1>
            <Link to="/80s">80s</Link>
            <Link to="/90s">90s</Link>
            <Link to="/00s">00s</Link>
            <Link to="/10s">10s</Link>
        </div>
    )
}


// const Header = styled.header`
// background-color:red;
// height:50px;
// width:100%;
// position:fixed;
// top:0;
// display:flex;
// flex-direction:row;
// justify-content:center;
// align-items:center;
// `
export default Home