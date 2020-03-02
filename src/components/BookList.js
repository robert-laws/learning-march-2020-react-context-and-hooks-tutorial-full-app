import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { Book } from '../components/Book';

export const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="booklist">
      <ul>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className='empty'>No books to read.</div>
  )
}
