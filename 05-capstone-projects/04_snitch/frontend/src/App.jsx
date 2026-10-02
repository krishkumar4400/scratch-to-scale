import { RouterProvider } from "react-router";
import routes from "./routes.jsx";
import { AuthProvider } from "./features/auth/context/auth.provider.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={routes} />
      </AuthProvider>
    </div>
  );
};

export default App;
