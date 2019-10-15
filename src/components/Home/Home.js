import React, {useState} from 'react';
import './Home.css';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Header = styled.nav`
background-color:RGB(119, 157, 218);
display:flex;
flex-direction:row;
align-items:center;
height:50px;
`

function Home(){
    const [text, setText] = useState("Take a trip back through time and experience some of America's cultural phenomenons from decades past and present.")
    return (
        <div className="Home">
            <Header>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/90s" className="navLink">90s</Link>
            <Link to="/00s" className="navLink">00s</Link>
            <Link to="/10s" className="navLink">10s</Link>
            <h1 className="fads">Fads Through the Decades</h1>
            </Header>
            <div className="topWords">
                <h1>Fads Through the Decades</h1>
            </div>
            <div className="previewTextDiv">
                <p className="previewText">{text}</p>
            </div>
            <div className="buttons">
                <div className="button" onClick={() => setText("Revisit the 90s, where bright neon colors and JNCO's were the peak of style")}><h2 className="buttonText">90s</h2></div>
                <div className="button" onClick={() => setText("Revisit the 2000's, where iPods and Silly Bandz were all the rage")}><h2 className="buttonText">00s</h2></div>
                <div className="button" onClick={() => setText("Explore our current decade where we've seen the rise of Fidget Spinners and Blockchain")}><h2 className="buttonText">10s</h2></div>
            </div>
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