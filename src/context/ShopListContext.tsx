import { createContext, ReactNode, useMemo, useState } from "react";
import Book from "../model/book";

export type ShopListBookData = {
  book: Book;
  quantity: number;
};

export type ShopListContextType = {
  shopListBooks: ShopListBookData[];
  setShopListBooks: (books: ShopListBookData[]) => void;
};

export type ShopListProviderType = {
  children: ReactNode;
};

export const ShopListContext = createContext<ShopListContextType | null>(null);

const ShopListContextProvider = ({ children }: ShopListProviderType) => {
  const [shopListBooks, setShopListBooks] = useState<ShopListBookData[]>([]);

  const contextValue: ShopListContextType = useMemo(
    () => ({
      shopListBooks,
      setShopListBooks,
    }),
    [shopListBooks]
  );

  return (
    <ShopListContext.Provider value={contextValue}>
      {children}
    </ShopListContext.Provider>
  );
};

export default ShopListContextProvider;
