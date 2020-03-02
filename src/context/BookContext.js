import React, { createContext, useReducer } from 'react';

import { booksData } from '../data/booksData';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, booksData)

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {children}
    </BookContext.Provider>
  )
}

