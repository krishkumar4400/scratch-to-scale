import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
  ]);

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoutes;
