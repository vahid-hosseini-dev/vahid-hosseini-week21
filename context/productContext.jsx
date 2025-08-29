import { createContext, useState } from "react";

const productContext = createContext();

function ProductProvider({ children }) {
  const [productInfo, setProductInfo] = useState({});

  return (
    <productContext.Provider value={{productInfo, setProductInfo}}>
      {children}
    </productContext.Provider>
  );
}

export { ProductProvider, productContext };
