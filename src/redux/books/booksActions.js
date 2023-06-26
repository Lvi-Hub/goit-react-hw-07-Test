import { createAction } from '@reduxjs/toolkit';
// pending
export const fetchBooksRequest = createAction('books/fetchBookRequest');
// fullilled
export const fetchBooksSuccess = createAction('books/fetchBookRequest');
// rejected
export const fetchBooksError = createAction('books/fetchBookRequest');
