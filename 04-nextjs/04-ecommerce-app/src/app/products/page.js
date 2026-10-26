"use cache";

import ProductCard from "@/components/ProductCard";
import axios from "axios";

const page = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  console.log(data);
  return (
    <div className="grid  md:grid-cols-4 gap-4 p-4">
      {data.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default page;
