import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = () => {
  const { loggedInUser } = useContext(AuthContext);
  if (loggedInUser) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default PublicRoute;
