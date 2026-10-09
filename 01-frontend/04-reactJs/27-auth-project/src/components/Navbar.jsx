import { Navlink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <Navlink to="/home">Home</Navlink>
      <Navlink to="/products">Products</Navlink>
      <Navlink to="/about">About</Navlink>
      <Navlink to="/contact">Contact</Navlink>
    </div>
  );
};

export default Navbar;
