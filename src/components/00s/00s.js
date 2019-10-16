import React, {useState} from 'react';
import './00s.css';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Header = styled.nav`
background-color:RGB(119, 157, 218);
display:flex;
flex-direction:row;
align-items:center;
height:50px;
`

function Thousand(){
    return (
        <div className="Home">
             <h1 className="title">The 00s</h1>
            <div className="fads00s">
                <h2 className="fadsTitle">Fads from the 00s</h2>
                <div className="fadBox">   
                </div>
            </div>
        </div>
    )
}

export default Thousand