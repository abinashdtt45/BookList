import { useContext } from "react";
import BookContext from "../context/bookContext";

const useBooksContext = () => {
  return useContext(BookContext);
};

export default useBooksContext;
