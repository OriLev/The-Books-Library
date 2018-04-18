import * as React from 'react';
import './App.css';
import { UserOptions } from '../UserOptions/UserOptions';
import { BookList } from '../BookList/BookList';
import { booksStore } from '../../stores/BooksStore';

const logo = require('../../book-open-outline-filled.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Books Library</h1>
        </header>
        <main className="AppMain">
          <UserOptions />
          <BookList store={booksStore} />
        </main>
      </div>
    );
  }
}

export default App;
