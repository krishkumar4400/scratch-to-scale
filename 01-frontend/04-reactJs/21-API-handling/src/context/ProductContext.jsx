import { createContext } from "react";

export const ProductContextProvider = createContext();

const ProductContext = ({ children }) => {
  const name = "krish";
  return (
    <ProductContextProvider.Provider value={name}>
      {children}
    </ProductContextProvider.Provider>
  );
};

export default ProductContext;
