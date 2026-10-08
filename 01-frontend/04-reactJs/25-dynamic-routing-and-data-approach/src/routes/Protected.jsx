import { Navigate } from "react-router";

const Protected = ({ children }) => {
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to={"/home"} />;
  }
  return children;
};

export default Protected;
3