import React from 'react';

import './App.scss';
import { BookContextProvider } from './context/BookContext';
import { Navbar } from './components/Navbar';
import { BookList } from './components/BookList';
import { BookForm } from './components/BookForm';

function App() {
  return (
    <main className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </main>
  );
}

export default App;
