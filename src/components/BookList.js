import { useContext } from "react";
import BookContext from "../context/bookContext";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useContext(BookContext);
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
