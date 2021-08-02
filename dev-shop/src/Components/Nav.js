import react from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css'

export default function Nav() {
    const navStyle = {
        color: 'white'
    };
    return(
        <div className="Nav">
            <ul className = "nav-link">
                <Link className = {navStyle} to = '/Carrinho'>
                     <li>Carrinho</li>
                </Link>
                <Link className = {navStyle} to = '/'>
                     <li>Home</li>
                </Link>
            </ul>
        </div>
   
    );
}