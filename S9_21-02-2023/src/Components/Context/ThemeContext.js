import { createContext, useState } from "react";
// Create the Context
export let ThemeContext = createContext();

function ThemeContextProviderComponent({ children }) {
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProviderComponent;
