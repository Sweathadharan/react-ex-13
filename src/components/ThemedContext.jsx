import React, { createContext, useState, useContext } from "react";
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("black");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "black" ? "gray" : "black"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} 
    </ThemeContext.Provider>
  );
}


function ThemedComponent({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme, color: theme === "black" ? "gray" : "black"}}>
      <button onClick={toggleTheme} >
        Toggle
      </button>
      {children}
    </div>
  );
}

export { ThemeProvider, ThemedComponent };
