import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../../components/BookList/BookList";
import { getBooks } from "../../services/bookService";
import Book from "../../model/book";
import Layout from "../../components/shared/Layout/Layout";
import {
  ShopListContext,
  ShopListContextType,
} from "../../context/ShopListContext";
import ErrorHandler from "../../components/ErrorMessageBox/ErrorMessageBox";
import Button from "../../components/shared/Button/Button";
import { StyledDiv } from "./HomePage.style";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const HomePage = () => {
  const { shopListBooks } = useContext(ShopListContext) as ShopListContextType;

  const [books, setBooks] = useState<Book[]>([]);
  const [shopedBooksQuantity, setShopedBooksQuantity] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    getTotalQuantityOfShopedBooks();
  }, [shopListBooks]);

  const getTotalQuantityOfShopedBooks = () => {
    const totalQuantity = shopListBooks.reduce(
      (sum, shopListBook) => sum + shopListBook.quantity,
      0
    );
    setShopedBooksQuantity(totalQuantity);
  };

  useEffect(() => {
    getBooks()
      .then((result) => setBooks(result))
      .catch((error) => setHasError(error));
  }, []);
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <Layout>
      {hasError ? (
        <ErrorHandler />
      ) : (
        <BookList books={books} shopedBooksQuantity={shopedBooksQuantity} />
      )}
      <StyledDiv>
        <Button text={"Sign Out"} onClickHandler={logout} />
      </StyledDiv>
    </Layout>
  );
};

export default HomePage;
