import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";
import { Link } from "react-router-dom";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <Link to="/"> Accueil </Link>
      <Link to="/Cartographie"> Cartographie </Link>
      <Link to="/River"> Rivières Sauvages </Link>
      <Link to="/Liens"> Liens Utiles </Link>
      <Link to="/Infos"> Mes Infos </Link>
    </Menu>
  );
};

export default BurgerMenu;
