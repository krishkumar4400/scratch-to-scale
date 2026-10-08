import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  return (
    <ProductContext.Provider value={{ productsData, setProductsData }}>
      {children}
    </ProductContext.Provider>
  );
};
