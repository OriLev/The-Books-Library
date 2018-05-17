import * as React from 'react';
import * as ReactModal from 'react-modal';
import { observer } from 'mobx-react';

import { UserOptions } from '../UserOptions/UserOptions';
import { BookList } from '../BookList/BookList';
import { DeleteConfirmation } from '../Modals/DeleteConfirmation';
import { AddBookModal } from '../Modals/AddBookModal';
import { EditBookModal } from '../Modals/EditBookModal';

import './App.css';

const logo = require('../../assets/book-open-outline-filled.svg');
ReactModal.setAppElement('#root');

@observer
export class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Books Library</h1>
        </header>
        <main className="AppMain">
          <DeleteConfirmation />
          <AddBookModal />
          <EditBookModal />
          <UserOptions />
          <BookList />
        </main>
      </div>
    );
  }
}
