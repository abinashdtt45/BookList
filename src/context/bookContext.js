import { createContext, useCallback, useState } from "react";
import {
  addBook,
  deleteBookById,
  getBook,
  updateBookById,
} from "../server/crud";

const BookContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // const fetchBook = async () => {
  //   setBooks(await getBook());
  // };

  const fetchBook = useCallback(async () => {
    setBooks(await getBook());
  }, []);

  const createBook = async (title) => {
    const newBook = await addBook(title);
    setBooks([...books, newBook]);
  };

  const updateBook = async (id, title) => {
    const updatedBook = await updateBookById(id, title);
    const updatedBookList = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updatedBook };
      }
      return book;
    });
    setBooks(updatedBookList);
  };

  const deleteBook = async (bookId) => {
    await deleteBookById(bookId);
    const updatedBookList = books.filter((book) => book.id !== bookId);
    setBooks(updatedBookList);
  };

  const valueToShare = {
    books,
    fetchBook,
    deleteBook,
    updateBook,
    onCreate: createBook,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
};

export default BookContext;
export { Provider };
