import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as booksOperations from 'redux/books/bookOperation';

export function BooksView() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.entities);

  useEffect(() => dispatch(booksOperations.fetchBooks()), [dispatch]);

  return <>{books.lenght > 0 && <p>Books</p>}</>;
}
