import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <div className="Nav">
      <div>
        <h2>React Routing</h2>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
        <Link to="/help">Help</Link>
      </div>
    </div>
  );
}

export default Nav;
