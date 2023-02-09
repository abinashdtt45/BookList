import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

const BookEdit = ({ book, onSubmit }) => {
  const { updateBook } = useBooksContext();
  const [title, setTitle] = useState(book.title || "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    updateBook(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
