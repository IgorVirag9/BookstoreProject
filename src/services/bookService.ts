import axios from "axios";
import Book from "../model/book";

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get(
    `${process.env.REACT_APP_FIREBASE_URL}/books.json`
  );
  const booksData = response.data;
  const booksArray: Book[] = Object.keys(booksData).map((key) => ({
    ...booksData[key],
    id: key,
  }));
  return booksArray;
};

export const getBook = async (id: string): Promise<Book> => {
  const response = await axios.get(
    `${process.env.REACT_APP_FIREBASE_URL}/books/${id}.json`
  );
  const bookData = response.data;
  const book: Book = {
    ...bookData,
    id: id,
  };
  return book;
};
