import { useContext } from "react";
import Button from "../shared/Button/Button";
import StyledBookCard from "./BookCard.style";
import { Link } from "react-router-dom";
import {
  ShopListContext,
  ShopListContextType,
} from "../../context/ShopListContext";
import Book from "../../model/book";

export type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  const { setShopListBooks, shopListBooks } = useContext(
    ShopListContext
  ) as ShopListContextType;

  const handleClick = (book: Book) => {
    const bookToAddIndex = shopListBooks.findIndex(
      (shopListBook) => shopListBook.book.id === book.id
    );
    if (bookToAddIndex !== -1) {
      incrementQuantityByOne(bookToAddIndex);
    } else {
      addBookToShopingList();
    }
  };

  const incrementQuantityByOne = (bookToAddIndex: number) => {
    const updatedShopListBooks = [...shopListBooks];
    updatedShopListBooks.splice(bookToAddIndex, 1, {
      book: book,
      quantity: shopListBooks[bookToAddIndex].quantity + 1,
    });
    setShopListBooks(updatedShopListBooks);
  };

  const addBookToShopingList = () => {
    setShopListBooks([...shopListBooks, { book: book, quantity: 1 }]);
  };

  return (
    <StyledBookCard>
      <img src={book.coverImage} alt="Book Poster" />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <h3>Rating: {book.rating}</h3>
      <p>Price: {book.price} RSD</p>
      <Link to={`/details/${book.id}`}>More info...</Link>
      <Button text="Add to Cart" onClickHandler={() => handleClick(book)} />
    </StyledBookCard>
  );
};

export default BookCard;
