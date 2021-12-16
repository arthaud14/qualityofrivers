import React from "react";
import BurgerMenu from "./BurgerMenu";


const Header = (props) => {
  return (
    <div className="header">
      <BurgerMenu />
      <h1 className="text-base">Qualité des Rivières</h1>
    </div>
  );
};

export default Header;
