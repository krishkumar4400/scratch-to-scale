import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
