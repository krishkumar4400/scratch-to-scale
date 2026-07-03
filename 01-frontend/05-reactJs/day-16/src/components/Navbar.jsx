import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-12 py-6 bg-slate-950">
      <h2>NavBar</h2>
      <div className="gap-6 flex items-center justify-center ">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border-1 border-white outline-0 px-6 py-1.5 rounded-full max-sm:hidden"
          />
          <button className="border p-2 rounded-full ">Search</button>
        </div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/products"}>Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
