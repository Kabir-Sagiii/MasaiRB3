import { Link } from "react-router-dom";

import "./Nav.css";
function Nav() {
  return (
    <div className="Nav">
      <div>
        <h2>React Routing</h2>
      </div>

      <div>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
        <Link style={{ color: "white" }} to="/users">
          Users
        </Link>
        <Link style={{ color: "white" }} to="/products">
          Products
        </Link>
        <Link style={{ color: "white" }} to="/help">
          Help
        </Link>
      </div>
    </div>
  );
}

export default Nav;
