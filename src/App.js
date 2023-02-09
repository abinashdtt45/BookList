import { useContext, useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/bookContext";

const App = () => {
  const { books, onCreate, fetchBook } = useContext(BookContext);

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} />
      <BookCreate onCreate={onCreate} />
    </div>
  );
};

export default App;
