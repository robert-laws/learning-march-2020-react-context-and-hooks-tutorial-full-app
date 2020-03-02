import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

export const Navbar = () => {
  const { comment, books } = useContext(BookContext);

  return (
    <nav className='navbar'>
      <h1>Spring Reading List</h1>
      <p>Currently you have {books.length} in your book list...</p>
      <p>{comment}</p>
    </nav>
  )
}
