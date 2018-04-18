import * as React from 'react';
import './UserOptions.css';

export class UserOptions extends React.Component {
  render() {
    return (
      <div className="optionsContainer">
        <ul className="optionsList">
            <li title="add a book" className="optionsList__option">
                <input type="button" className="addBookButton"/>
            </li>
            {/* <li className="optionsList__option">
                <input type="text" placeholder="what book or author would you like to search for?"/>
            </li> */}
        </ul>
        
      </div>
    );
  }
}
