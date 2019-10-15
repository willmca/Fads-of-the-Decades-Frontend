import React from 'react';
import './80s.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Eighty(){
    return (
        <div className="Home">
            <Link to="/">Home</Link>
            <Link to="/80s">80s</Link>
            <Link to="/90s">90s</Link>
            <Link to="/00s">00s</Link>
            <Link to="/10s">10s</Link>
        </div>
    )
}

export default Eighty