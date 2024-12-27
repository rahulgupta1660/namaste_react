import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between bg-orange-200 p-5">
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
          <Link to="#">Cart</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
