import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (<div>
    <nav className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
    </nav>
  </div>)
}

export default NavBar;