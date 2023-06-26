import { configureStore } from '@reduxjs/toolkit';
import booksreducer from './books/booksReducer';
export const store = configureStore({
  reducer: {
    books: booksreducer,
  },
});
