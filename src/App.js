import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvide from './components/Context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvide>
        <Navbar />
        <BookList />
      </ThemeContextProvide>
    </div>
  );
}

export default App;
