import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import "./Nav.css";
function Nav() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <div className="Nav">
      <div>
        <h2>React Routing</h2>
      </div>

      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
          })}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
          })}
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
          })}
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
          })}
          to="/help"
        >
          Help
        </NavLink>

        <button disabled={!isLoggedIn} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
