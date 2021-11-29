import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row list-none h-18">
          <li className="pl-10 pt-2">
            <Link to="/">Accueil</Link>
          </li>
          <li className="pl-10 pt-2">
            <Link to="/cartographie">Cartographie</Link>
          </li>
          <li className="pl-10 pt-2">
            <Link to="/liens">Liens Utiles</Link>
          </li>
          <li className="pl-10 pt-2">
            <Link to="/infos">Mes Infos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
