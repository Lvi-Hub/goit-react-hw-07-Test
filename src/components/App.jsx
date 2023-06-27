import { useDispatch } from 'react-redux';
import { BooksView } from './BooksView/BooksView';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="app">
      React homework template
      <BooksView />
    </div>
  );
};
