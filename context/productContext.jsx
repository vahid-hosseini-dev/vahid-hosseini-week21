import { createContext, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [productInfo, setProductInfo] = useState({});

  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
