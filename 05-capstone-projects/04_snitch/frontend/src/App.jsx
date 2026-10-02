import { RouterProvider } from "react-router";
import routes from "./routes.jsx";
const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
