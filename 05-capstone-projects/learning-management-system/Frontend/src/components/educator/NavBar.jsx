import { assets, dummyEducatorData } from "../../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useUser, UserButton, useClerk } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const educatorData = dummyEducatorData;
  const {openSignIn} = useClerk();
  return (
    <div className="flex justify-between items-center pt-5 px-4 sm:px-10 border-b border-gray-500 py-6">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-25 sm:w-28 cursor-pointer"
      />
      <div className="flex items-center gap-5 relative text-gray-800">
        <p>Hi! 
          {user ? " " + user.fullName : '  Developers'}
        </p>
        {user ? <UserButton /> : <img onClick={() => {openSignIn();}} src={assets.user_icon} className="max-w-8 cursor-pointer"/>}</div>
    </div>
  );
};

export default NavBar;
