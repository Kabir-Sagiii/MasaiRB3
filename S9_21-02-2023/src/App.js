import "./App.css";
import { useState, useContext } from "react";
import User from "./Components/User";
import Emp from "./Components/Emp";
import { ThemeContext } from "./Components/Context/ThemeContext";
import { AuthContext } from "./Components/Context/AuthContext";
import Nav from "./Components/Nav";
import ThemeContextProviderComponent from "./Components/Context/ThemeContext";

function App() {
  let { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div
      className="App"
      style={{
        background: theme === "Dark" ? "black" : "white",
        height: "100vh",
        color: theme === "Dark" ? "white" : "black",
      }}
    >
      <Nav />

      <h1>Theme Mode is : {theme}</h1>
      <button onClick={toggleTheme} disabled={isLoggedIn ? false : true}>
        Change theme
      </button>

      {/* <User name="Ayush Singh" /> */}

      {/* <User name="Zoya Khan">Kabir</User> */}

      {/* <User name="Zoya Khan">
        <Emp>Hello</Emp>
        Kabir
        <h1>Rendering H1 Tag</h1>
      </User> */}
    </div>
  );
}

export default App;
