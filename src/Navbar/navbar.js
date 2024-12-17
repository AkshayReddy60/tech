import React, { useState } from "react";
import './navbar.css';
import { NavLink } from "react-router-dom";
import biobiz from '../Assets/biobiz.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="navvvv">
                <div className="immm">
                    <img src={biobiz} className="imgnav" alt="biobiz" />
                </div>
                <div className="toggle-button" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`navitems ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/" className="navmar" activeClassName="active">Home</NavLink>
                    <NavLink to="/about" className="navmar" activeClassName="active">About</NavLink>
                    <NavLink to="/indiaupdate" className="navmar" activeClassName="active">Indiaupdate</NavLink>
                    <NavLink to="/opportunities" className="navmar" activeClassName="active">Opportunities</NavLink>
                    <NavLink to="/biobiscon" className="navmar" activeClassName="active">Biobizcon</NavLink>
                    <NavLink to="/innovationinsight" className="navmar" activeClassName="active">Innovation Insight</NavLink>
                    <NavLink to="/insight" className="navmar" activeClassName="active">Insight</NavLink>
                    <NavLink to="/bring" className="navmar" activeClassName="active">Bring</NavLink>
                    <NavLink to="/contact" className="navmar" activeClassName="active">Contact</NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;
