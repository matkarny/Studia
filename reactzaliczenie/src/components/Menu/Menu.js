import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css"
const Menu = () => (
    <div className="navbar">
        <ul className="nav">
            <li> <NavLink exact to="/"> Home </NavLink> </li>
            <li> <NavLink to="/catalog" >Catalog</NavLink></li>
            <li> <NavLink to="/about" >About</NavLink></li>
        </ul>
    </div>
);

export default Menu;
