import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "green" : "white",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={"/"}
      >
        Home
      </NavLink>{" "}
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "green" : "white",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={"/about"}
      >
        {" "}
        About{" "}
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "green" : "white",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={"/contact"}
      >
        {" "}
        Contact{" "}
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "green" : "white",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={"/course"}
      >
        {" "}
        Course
      </NavLink>
    </div>
  );
};

export default Navbar;
