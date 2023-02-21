import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { AuthContext } from "./Context/AuthContext";

function Nav(props) {
  const { theme } = useContext(ThemeContext);
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <div
      style={{
        background: theme === "Dark" ? "white" : "black",
        color: theme === "Dark" ? "black" : "white",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h3>
        Is User Authenticated :{" "}
        <span style={{ color: "green" }}>{isLoggedIn ? "Yes" : "No"}</span>
      </h3>

      <div>
        <button onClick={login} disabled={isLoggedIn ? true : false}>
          Login
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button onClick={logout} disabled={isLoggedIn ? false : true}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
