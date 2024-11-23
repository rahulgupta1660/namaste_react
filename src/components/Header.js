import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <nav className="navBar">
        <a>HOME</a>
        <a>ABOUT</a>
        <a>CONTACT</a>
        <a>CART</a>
      </nav>
    </header>
  );
};

export default Header;
