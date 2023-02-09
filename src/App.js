import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/bookContext";

const App = () => {
  const { fetchBook } = useContext(BookContext);

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
