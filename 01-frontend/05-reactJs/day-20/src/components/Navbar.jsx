import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { ThemeContextProvider } from "../context/ThemeContext";

const Navbar = () => {
  // const data = useContext(UserDataContext);
  // const text = useContext(ThemeContextProvider);
  // console.log(data)
  // console.log(text)

  const [theme, setTheme] = useContext(ThemeContextProvider);
  console.log(theme);
  return (
    <div className="nav">
      <h1>Navbar</h1>
      <h2>Theme - {theme}</h2>
      <div>
        <button
          onClick={() => {
            theme == "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default Navbar;
