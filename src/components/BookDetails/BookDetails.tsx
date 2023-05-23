import { ThemeProvider } from "styled-components";
import Book from "../../model/book";
import theme from "../../theme";
import StyledBookDetails, { StyledBookInfo } from "./BookDetails.style";

type BookDetailsProps = {
  book: Book;
};

const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    // TODO: Delete ThemeProvider
    <ThemeProvider theme={theme}>
      <StyledBookDetails>
        <img src={book.coverImage} alt={book.title} />
        <section>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>{book.publishingHouse}</p>
          <StyledBookInfo>
            <p>Rating: {book.rating}</p>
            <p>Letter: {book.letter}</p>
            <p>Language: {book.language}</p>
            <p>ISBN: {book.isbn}</p>
          </StyledBookInfo>
          <p>{book.description}</p>
          <hr />
          <p>Publication year: {book.yearOfPublication}.</p>
          <p>Number of pages: {book.numberOfPages}</p>
          <p>Binding type: {book.bindingType}</p>
          <p>Price: {book.price} RSD</p>
        </section>
      </StyledBookDetails>
    </ThemeProvider>
  );
};

export default BookDetails;
