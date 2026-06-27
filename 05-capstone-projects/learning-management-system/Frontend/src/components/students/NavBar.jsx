import { useContext } from "react";
import { assets } from "../../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext.jsx";

const NavBar = () => {
  const navigate = useNavigate();

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { isEducator, setIsEducator } = useContext(AppContext);

  const isCourseListPage = location.pathname.includes("/course-list");

  return (
    <div
      className={`flex items-center justify-between px-4 py-5 sm:px-10 md:px-15 lg:px-36 border border-b border-gray-500 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/80"
      } `}
    >

      <h2
    className="text-2xl sm:text-4xl font-semibold text-black cursor-pointer"
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
      >
        LMS
      </h2>

      {/* For Desktop Screen */}
      <div className="hidden sm:flex items-center gap-5 text-gray-600">
        <div className="flex items-center gap-4">
          {user && (
            <>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setIsEducator(true);
                  navigate("/educator");
                }}
              >
                {" "}
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>{" "}
              |<Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="bg-blue-600 rounded-full px-5 py-2 outline-0 border-0 text-white"
          >
            Create Account
          </button>
        )}
      </div>

      {/* For Phone Screens */}
      <div className="sm:hidden flex items-center gap-2 sm:gap-4 text-gray-600">
        <div className="flex items-center gap-4">
          {user && (
            <>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setIsEducator(true);
                  navigate("/educator");
                }}
              >
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>{" "}
              |<Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={openSignIn}>
            {<img src={assets.user_icon} className="cursor-pointer" alt="" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
