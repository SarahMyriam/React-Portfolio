import React from "react";
import{link} from "react-router-dom";

function Header(){
    return(
        <header class="header-area">
            <nav class="nav">
                <ul class="nav-list">
                    
                    <li>
                        <link to ={"/"}>
                            <button type="button" class="btn btn-outline">About</button>
                        </link>
                    </li>
                    <li>
                        <link to ={"/portfolio"}>
                            <button type="button" class="btn btn-outline">Portfolio</button>
                        </link>
                    </li>
                    <li>
                        <link to ={"/resume"}>
                            <button type="button" class="btn btn-outline">Resume</button>
                        </link>
                    </li>
                    <li>
                        <link to={"/contact"}>
                            <button type="button" class="btn btn-outline">Contact</button>
                        </link>
                    </li>
                </ul>
            </nav>
        
            <div class="landing-text">
                <h1>Sarah Myriam.</h1>
                <h6> Web Developer</h6>
            </div>
        </header>
    );
}

export default Header;