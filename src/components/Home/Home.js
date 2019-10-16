import React, {useState} from 'react';
import './Home.css';
import styled from 'styled-components'
import {Link} from "react-router-dom";



function Home(){
    const [text, setText] = useState("Take a trip back through time and experience some of America's cultural phenomenons from decades past and present.")
    return (
        <div className="Home">
            <div className="topWords">
                <h1>Fads Through the Decades</h1>
            </div>
            <div className="previewTextDiv">
                <p className="previewText">{text}</p>
            </div>
            <div className="buttons">
                <div className="button" onClick={() => setText(<Link to ="/90s">Click here to revisit the 90s, where bright neon colors and JNCO's were the peak of style"</Link>)}><h2 className="buttonText">90s</h2></div>
                <div className="button" onClick={() => setText(<Link to ="/00s">"Click here to revisit the 2000's, where iPods and Silly Bandz were all the rage"</Link>)}><h2 className="buttonText">00s</h2></div>
                <div className="button" onClick={() => setText(<Link to="/10s">"Click here to explore our current decade and the rise of Fidget Spinners and Blockchain"</Link>)}><h2 className="buttonText">10s</h2></div>
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