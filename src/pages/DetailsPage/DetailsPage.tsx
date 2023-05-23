import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetails from "../../components/BookDetails/BookDetails";
import Layout from "../../components/shared/Layout/Layout";
import Book from "../../model/book";
import { getBook } from "../../services/bookService";
import ErrorMessageBox from "../../components/ErrorMessageBox/ErrorMessageBox";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    getBook(id!)
      .then((result) => setSelectedBook(result))
      .catch((error) => setHasError(error));
  }, [id]);

  return (
    <Layout>
      {selectedBook !== null ? (
        <BookDetails book={selectedBook} />
      ) : (
        <ErrorMessageBox />
      )}
    </Layout>
  );
};

export default DetailsPage;
