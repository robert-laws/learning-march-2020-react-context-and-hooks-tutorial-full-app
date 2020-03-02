import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export const Book = ({ book }) => {
  const { removeBook } = useContext(BookContext);

  return (
    <li className='book' onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  )
}
