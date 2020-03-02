import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext';

export const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { 
      title, 
      author 
    }});
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit} className='bookForm'>
      <div className="form-control">
        <label htmlFor='title'>Title:</label>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor='author'>Author:</label>
        <input type="text" placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <input type="submit" value='Add Book' />
    </form>
  )
}
