import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "Learn React Fundamentals",
      author: "Salam Sheikh",
      price: 100,
    },
    {
      id: uuidv4(),
      title: "Learn Javascript Fundamentals",
      author: "Salam Sheikh's Wiffy",
      price: 100,
    },
    {
      id: uuidv4(),
      title: "Learn Redux Fundamentals",
      author: "Safwan Al Safi",
      price: 100,
    },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author, price } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
        isBookExist[0].price = price;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
