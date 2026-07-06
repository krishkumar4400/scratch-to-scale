import { useContext, useEffect, useState } from "react";
import { ProductContextProvider } from "../context/ProductContext";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    console.log(data);
  };
  const getFirstData = async (id) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
    {
        products.map((product, index) => {
            return <div className="products" key={index}>
                <h1>
                    {
                        product.title
                    }
                </h1>
            </div>
        })
    }
    </div>
  );
};

export default Product;
