import { useContext, useState } from "react";
import BookContext from "../context/bookContext";
import BookEdit from "./BookEdit";

const BookShow = ({ book }) => {
  const [edit, setEdit] = useState(false);
  const { updateBook, deleteBook } = useContext(BookContext);

  const getContent = () => {
    return edit ? (
      <BookEdit book={book} onSubmit={handleSumbit} />
    ) : (
      <h3>{book.title}</h3>
    );
  };

  const handleSumbit = (id, title) => {
    updateBook(id, title);
    setEdit(!edit);
  };

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {getContent()}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
