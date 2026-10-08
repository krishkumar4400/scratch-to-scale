import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <AppRoutes />
    </div>
  );
};

export default App;
