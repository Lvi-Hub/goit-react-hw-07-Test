import * as booksActions from './booksActions';
import * as booksShelfAPI from 'service/booksshelf-api';

export const fetchBooks = () => async dispatch => {
  dispatch(booksActions.fetchBooksRequest());
  try {
    const books = await booksShelfAPI.fetchBooks();
    dispatch(booksActions.fetchBooksSuccess(books));
  } catch (error) {
    dispatch(booksActions.fetchBooksError(error));
  }
};
