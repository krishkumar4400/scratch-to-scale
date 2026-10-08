import axios from "axios";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import ProductsCard from "../components/ProductsCard.jsx";

const Home = () => {
  console.log("home");
  const { productsData, setProductsData } = useContext(ProductContext);

  const getProductsData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      console.log(response.data);
      setProductsData(response.data);
    } catch (error) {
      console.error("Failed to fetch products data", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      {productsData.map((product) => {
        return <ProductsCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Home;
