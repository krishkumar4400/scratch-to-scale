import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "./lauout/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AppLayout from "./lauout/AppLayout.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/main",
      element: <AppLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
