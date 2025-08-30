import { createContext, useState, useContext } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [productInfo, setProductInfo] = useState({});

  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export { ProductProvider, useProducts, ProductContext };
