import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;
