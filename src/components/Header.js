import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between p-5">
      <p>logo</p>
      <ul className="list-style-none flex gap-5">
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
