import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      Product Page
      <div>
        <div>
          <Link to={"/products/men"}>Men's Collection</Link>
        </div>
        <div>
          <Link to={"/products/women"}>Women's Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
