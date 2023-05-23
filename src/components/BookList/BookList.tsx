import Book from "../../model/book";
import BookCard from "../BookCard/BookCard";
import { useNavigate } from "react-router-dom";
import { Heading2, Heading3, Heading4, StyledBookList } from "./BookList.style";

import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useEffect, useState } from "react";

export type BookListProps = {
  books: Book[];
  shopedBooksQuantity: number;
};

const BookList = ({ books, shopedBooksQuantity }: BookListProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return (
    <section>
      {user && (
        <Heading4>
          <p>Logged user:</p>
          {user.email}
        </Heading4>
      )}
      <Heading2>Our books</Heading2>
      <Heading3>Added books: {shopedBooksQuantity}</Heading3>

      <StyledBookList>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </StyledBookList>
    </section>
  );
};

export default BookList;
