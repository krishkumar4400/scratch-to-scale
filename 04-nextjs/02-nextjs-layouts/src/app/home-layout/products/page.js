"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  fetchData();

  const router = useRouter();
  return (
    <div>
      <h1>All Products Lists Here</h1>

      <div>
        {products.map((product) => {
          return (
            <h2
              onClick={() => router.push(`/home-layout/products/${product.id}`)}
              key={product.id}
            >
              {product.title}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default page;
