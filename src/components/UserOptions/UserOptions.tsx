import * as React from 'react';
import { inject } from 'mobx-react';

import { ConnectedComponent } from '../../util/ConnectedComponent';
import { AppStore } from '../../stores/AppStore';
import { AddBookButton } from '../Buttons/Buttons';

import './UserOptions.css';

@inject('appStore')
export class UserOptions extends ConnectedComponent<{}, {appStore: AppStore}> {
    render() {
        const { userInteractionStore } = this.connected.appStore;
        return (
            <div className="optionsContainer">
                <ul className="optionsList">
                    <li title="add a book" className="optionsList__option">
                        <AddBookButton 
                            action={userInteractionStore.promptAddBookModal}
                            title="Add new book" 
                        />
                    </li>
                </ul>             
            </div>
        );
    } 
}
