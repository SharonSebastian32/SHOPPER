import { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [products] = useState(all_product);

  return (
    <ShopContext.Provider value={{ all_product: products }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
