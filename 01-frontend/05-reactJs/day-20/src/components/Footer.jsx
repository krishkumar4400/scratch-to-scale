import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { ThemeContextProvider } from "../context/ThemeContext";

const Footer = () => {
  // const data = useContext(UserDataContext);
  // console.log(data);

  const [theme] = useContext(ThemeContextProvider);
  return (
    <div className="footer">
      <h1>Footer - </h1>
      <h2>
        {
         theme
        }
      </h2>
    </div>
  );
};

export default Footer;
