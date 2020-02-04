import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className="nav-style">
            <p><NavLink activeStyle={{ display: "none" }} exact to="/" style={{ textDecoration: 'none' }}>Home</NavLink></p>
            <p><NavLink activeStyle={{ color: "red", fontWeight: "bolder" }} exact to="/beers" style={{ textDecoration: 'none' }}>Beers</NavLink></p>
            <p><NavLink activeStyle={{ color: "red", fontWeight: "bolder" }} exact to="/randombeer" style={{ textDecoration: 'none' }}>Random Beer</NavLink></p>
            <p><NavLink activeStyle={{ color: "red", fontWeight: "bolder" }} exact to="/newbeer" style={{ textDecoration: 'none' }}>New Beer</NavLink></p>
        </nav>
    )
}

export default navbar;