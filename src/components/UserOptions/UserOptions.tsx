import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { AppStore } from '../../stores/AppStore';

// import { modalsStore } from '../../stores/ModalsStore';
import './UserOptions.css';

interface UserOptionsProps {
    appStore?: AppStore;
}

export const UserOptions = inject('appStore')(observer(({appStore}: UserOptionsProps) => {
    if (appStore) {
        return (
            <div className="optionsContainer">
              <ul className="optionsList">
                  <li title="add a book" className="optionsList__option">
                      <input type="button" className="addBookButton" onClick={appStore.modalsStore.toggleAddBookModal}/>
                  </li>
                  {/* <li className="optionsList__option">
                      <input type="text" placeholder="what book or author would you like to search for?"/>
                  </li> */}
              </ul>
              
            </div>
          );
    } else {
        return null;
    }
}));
