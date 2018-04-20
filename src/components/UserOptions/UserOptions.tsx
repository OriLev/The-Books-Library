import * as React from 'react';
import { observer, } from 'mobx-react';
import { modalsStore } from '../../stores/ModalsStore';
import './UserOptions.css';

export const UserOptions = observer(() => {
    return (
      <div className="optionsContainer">
        <ul className="optionsList">
            <li title="add a book" className="optionsList__option">
                <input type="button" className="addBookButton" onClick={modalsStore.toggleAddBookModal}/>
            </li>
            {/* <li className="optionsList__option">
                <input type="text" placeholder="what book or author would you like to search for?"/>
            </li> */}
        </ul>
        
      </div>
    );
  
});
