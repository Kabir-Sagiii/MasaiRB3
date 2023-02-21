import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContext } from "./Components/Context/ThemeContext";
import ThemeContextProviderComponent from "./Components/Context/ThemeContext";
import AuthContextProviderComponent from "./Components/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ThemeContext.Provider value={{ name: "Kabir", city: "Delhi" }}>
//     <App />
//   </ThemeContext.Provider>
// );

root.render(
  //   <AuthContextProviderComponent>
  <ThemeContextProviderComponent>
    <AuthContextProviderComponent>
      <App />
    </AuthContextProviderComponent>
  </ThemeContextProviderComponent>
  //   </AuthContextProviderComponent>
);
