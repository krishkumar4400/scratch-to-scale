import { Navlink, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  // loading ui

  return (
    <div className="flex flex-col gap-10 border-r border-gray-400 ">
      <div>
        <h2>Logo</h2>
      </div>
      <div className="flex flex-col gap-3 ">
        <Navlink
          className={({ isActive }) =>
            isActive
              ? "bg-green-400 font-semibold text-green-600"
              : "border-b border-gray-400"
          }
          to="/home"
          end
        >
          Home
        </Navlink>
        <Navlink
          className={({ isActive }) =>
            isActive
              ? "bg-green-400 font-semibold text-green-600"
              : "border-b border-gray-400"
          }
        >
          Products
        </Navlink>
        <Navlink
          className={({ isActive }) =>
            isActive
              ? "bg-green-400 font-semibold text-green-600"
              : "border-b border-gray-400"
          }
          to="/about"
        >
          About
        </Navlink>
        <Navlink
          className={({ isActive }) =>
            isActive
              ? "bg-green-400 font-semibold text-green-600"
              : "border-b border-gray-400"
          }
          to="/contact"
        >
          Contact
        </Navlink>
      </div>
    </div>
  );
};

export default Navbar;
