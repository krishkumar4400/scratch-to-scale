import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-5 flex w-full items-center justify-between">
      <div className="">Logo</div>
      <div className="flex gap-10 text-xl">
        <NavLink to={"/home"} className="cursor-pointer">
          Home
        </NavLink>
        <NavLink to={"/about"} className="cursor-pointer">
          About
        </NavLink>
        <NavLink to={"/products"} className="cursor-pointer">
          Products
        </NavLink>
      </div>
      <div>
        <button className="border px-6 py-2 rounded-sm font-semibold cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
