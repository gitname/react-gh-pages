import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header class="header">
            <div class="logo">
                <img src={require("./eye.png")} width={75} height={75} />
            </div>
            <div class="left">
                <a href="react-gh-pages">Color Blindness Awareness</a>
            </div>
            <div class="mid">
                <ul class="navbar">
                    <li>
                        <Link to="/simulator">Color Blindness Simulator</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li>
                        <Link to="/identifier">Color Identifier</Link>
                    </li>
                    <li>
                        <Link to="/credits">Project Credits</Link>
                    </li>
                </ul>

            </div>

        </header>
    );
}
export default Navbar;