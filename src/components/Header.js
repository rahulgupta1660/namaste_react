import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setlogin] = useState("Login");

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
      <button
        className="signup_login"
        onClick={() => {
          login === "Login" ? setlogin("Sign Up") : setlogin("Login");
        }}
      >
        {login}
      </button>
    </header>
  );
};

export default Header;
