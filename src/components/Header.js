import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <header className="flex justify-between bg-orange-200 p-5 items-center">
      <p>logo</p>
      <ul className="flex gap-5">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="#">cart</Link>
        </li>
      </ul>
      <button
        className="w-24 py-3 rounded-md bg-slate-100 text-black"
        onClick={() =>
          login === "Login" ? setLogin("Sign up") : setLogin("Login")
        }
      >
        {login}
      </button>
    </header>
  );
};

export default Header;
