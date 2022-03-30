import React from 'react';
import './index.css';
import logo from "./images/trollface.png";

function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo}/>
            <h1>Meme Generator</h1>
        </nav>
    )
}

export default Navbar