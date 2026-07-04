import React from "react";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { ThemeContextProvider } from "../context/ThemeContext";

const Section = () => {
  // const data = useContext(UserDataContext);
  // console.log(data);

  const [theme] = useContext(ThemeContextProvider);
  return (
    <div className="section">
      <Section1 />
      <h2>Theme - {theme}</h2>
      <Section2 />
    </div>
  );
};

export default Section;
