import react from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import Logo from './Logo.png';

function Nav() {
    
    return (
        <nav>
            <Link to="/" >
            <img src={Logo} alt="Logo"/>
            </Link>
            <ul className="nav-links">
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/menu" >
                    <li>Menu</li>
                </Link>
                <Link to="/" >
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;