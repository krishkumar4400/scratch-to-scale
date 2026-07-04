import { useState } from "react";
import { createContext } from "react";

export const ThemeContextProvider = createContext();

const ThemeContext = ({ children }) => {
  const text = "temp test";
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContextProvider.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContextProvider.Provider>
  );
};

export default ThemeContext;
