import axios from "axios";

export const addBook = async (title) => {
  const response = await axios.post("http://localhost:3001/books", { title });
  return response.data;
};

export const updateBookById = async (id, title) => {
  const response = await axios.put(`http://localhost:3001/books/${id}`, {
    title,
  });
  return response.data;
};

export const deleteBookById = async (id) => {
  const response = await axios.delete(`http://localhost:3001/books/${id}`);
  return response.data;
};

export const getBook = async () => {
  const response = await axios.get("http://localhost:3001/books/");
  return response.data;
};
