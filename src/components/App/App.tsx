import * as React from 'react';
import * as ReactModal from 'react-modal';
import { observer, } from 'mobx-react';
import './App.css';
import { UserOptions } from '../UserOptions/UserOptions';
import { BookList } from '../BookList/BookList';
import { booksStore } from '../../stores/BooksStore';
import { modalsStore } from '../../stores/ModalsStore';

// import { Modal } from '../Modal/Modal';

const logo = require('../../book-open-outline-filled.svg');
ReactModal.setAppElement('#root');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Books Library</h1>
        </header>
        <main className="AppMain">
        <ReactModal 
          isOpen={modalsStore.addBookModalShowing}
          onRequestClose={modalsStore.toggleAddBookModal}
          // appElement={this}
        >
          `Here's some content for the modal`
          <input type="button" className="addBookButton" onClick={modalsStore.toggleAddBookModal}/>
        </ReactModal>
          <UserOptions />
          <BookList store={booksStore} />
        </main>
      </div>
    );
  }
}

export default observer(App);
