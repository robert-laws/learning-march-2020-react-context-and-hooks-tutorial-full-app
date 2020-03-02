import React, { createContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { booksData } from '../data/booksData';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState(booksData);

  const addBook = (title, author) => {
    setBooks([...books, { id: uuidv4(), title, author }])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => (
      book.id !== id
    )))
  }

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {children}
    </BookContext.Provider>
  )
}

