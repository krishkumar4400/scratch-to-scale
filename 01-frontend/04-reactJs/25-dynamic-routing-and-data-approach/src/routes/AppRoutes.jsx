import { Route, Routes } from "react-router";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import Protected from "./Protected.jsx";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/about"
          element={
            <Protected>
              <About />
            </Protected>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
