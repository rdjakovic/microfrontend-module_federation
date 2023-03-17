import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-evenly p-2 border">
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/app1">
        <span>App1</span>
      </NavLink>
      <NavLink to="/app2">
        <span>App2</span>
      </NavLink>
    </nav>
  );
};
export default Nav;
