import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { booksOperations, booksSelectors } from 'redux/books';

export function BooksView() {
  // const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks);

  // useEffect(() => dispatch(booksOperations.fetchBooks()), [dispatch]);

  return (
    <>
      {books.lenght > 0 && <p>Books</p>}
      <ul>
        {books.map(({ id, name, number }) => {
          console.log(id);
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button id={id}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
