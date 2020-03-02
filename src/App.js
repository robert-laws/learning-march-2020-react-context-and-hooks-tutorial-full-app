import React from 'react';

import './App.scss';
import { BookContextProvider } from './context/BookContext';
import { Navbar } from './components/Navbar';
import { BookList } from './components/BookList';
import { BookForm } from './components/BookForm';
import { DatabaseContextProvider } from './context/DatabaseContext';
import { DatabaseList } from './components/DatabaseList';

function App() {
  return (
    <main className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
      <hr/>
      <DatabaseContextProvider>
        <DatabaseList />
      </DatabaseContextProvider>
    </main>
  );
}

export default App;
