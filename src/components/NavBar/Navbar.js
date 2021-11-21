import React from "react";
import "./Navbar.css";
import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Navbar = (props) => {
  return (
    <header className="navbar">
      <nav className="navbar_navigation"> 
        <div>
            <DrawerToggleButton />
        </div>
        <div className="logo">
          <img src="/Logo.png" alt="Logo" width="80" height="80"/>
        </div>
        <div className="spacer" />
        <div className="navbar_navigation_item">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Cartographie</a>
            </li>
            <li>
              <a href="/">Liens utiles</a>
            </li>
            <li>
              <a href="/">Mes infos</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
