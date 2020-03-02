import React, { createContext, useReducer, useState, useEffect } from 'react';

import { booksData } from '../data/booksData';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [comment, setComment] = useState('');
  const [books, dispatch] = useReducer(bookReducer, booksData);

  useEffect(() => {
    books.length < 4 ? 
      setComment(`Just a few books are in the list...`) : 
      setComment(`That's a lot of books!`)
  }, [books])

  return (
    <BookContext.Provider value={{comment, books, dispatch}}>
      {children}
    </BookContext.Provider>
  )
}

