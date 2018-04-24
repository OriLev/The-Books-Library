import * as React from 'react';
import * as ReactModal from 'react-modal';
import { observer, inject } from 'mobx-react';
import './App.css';
import { UserOptions } from '../UserOptions/UserOptions';
import { BookList } from '../BookList/BookList';
import { AppStore } from '../../stores/AppStore';
import { BooksStore } from '../../stores/BooksStore';
import { ModalsStore } from '../../stores/ModalsStore';
import { DeleteConfirmation } from '../Modals/DeleteConfirmation';

const logo = require('../../book-open-outline-filled.svg');
ReactModal.setAppElement('#root');

interface AppProps {
  appStore?: AppStore;
}

class App extends React.Component<AppProps, {}> {
  booksStore: BooksStore;
  modalsStore: ModalsStore;

  constructor(props: AppProps) {
    super(props);
    if (props.appStore) {
      const { booksStore, modalsStore, } = props.appStore;
      this.booksStore = booksStore;
      this.modalsStore = modalsStore;
    }
  }
  render() {
    const { booksStore, modalsStore } = this;
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
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            shouldReturnFocusAfterClose={false}
            style={{
              content: {
                width: '500px',
                height: '500px',
                margin: 'auto auto',
              }
            }}
          >
            `Here's some content for the modal`
            <input type="button" className="addBookButton" onClick={modalsStore.toggleAddBookModal} />
          </ReactModal>

          <DeleteConfirmation />
          <UserOptions />
          <BookList store={booksStore} />
        </main>
      </div>
    );
  }
}

export default inject('appStore')(observer(App));
