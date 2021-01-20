import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Button} from './Button';



function NavBar() {
    const [click,setClick] = useState(false);
    const [button,setButton]= useState(true);

    const handleClick =() => setClick(!click);
    const closeMobileMenu=() => setClick(false);


    //displays button depending on the screen size(mobile/desktop)
    const showButton=()=>{
        if(window.innerWidth<= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    //useeffect to fix button
    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Sarah Myriam Bamba<i className='fas fa-feather-alt'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click? "fas fa-heart" : "fas fa-bars"} />
                    </div>
                    <ul className={click? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Resume" className="nav-links" onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    
                    {button && <Button buttonStyle="btn--outline">CONTACT</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar;

