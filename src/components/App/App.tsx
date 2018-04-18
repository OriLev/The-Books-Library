import * as React from 'react';
import './App.css';
import { UserOptions } from '../UserOptions/UserOptions';

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
          {/* <BookList /> */}
        </main>
      </div>
    );
  }
}

export default App;
