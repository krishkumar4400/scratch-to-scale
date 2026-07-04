import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext.jsx";

const Navbar = (props) => {
  console.log(props);
  console.log(props.children);

  const data = useContext(UserDataContext);
  console.log(data)

  return (
    <div>
      <h1>Navbar</h1>
      {props.children}
      <h1>
        {
            props.brand
        }
      </h1>
    </div>
  );
};

export default Navbar;
