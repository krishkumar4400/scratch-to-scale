import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Footer = () => {
  const data = useContext(UserDataContext);
  console.log(data);
  return <div>Footer</div>;
};

export default Footer;
