import * as React from 'react';
import { inject } from 'mobx-react';

import { ConnectedComponent } from '../../util/ConnectedComponent';
import { AppStore, } from '../../stores/AppStore';
import { EditBookButton, DeleteBookButton, } from '../Buttons/Buttons';
import './BookFunctions.css';

@inject('appStore')
export class BookFunctions extends ConnectedComponent<{book: Book}, {appStore: AppStore}> {
    render() {
        const { userInteractionStore } = this.connected.appStore;
        return (
            <div className="bookFunctions">
                <EditBookButton 
                    className="bookFunctions__function"
                    title="Edit book"
                    action={userInteractionStore.promptEditBookModal.bind(null, this.props.book)}
                />
                <DeleteBookButton 
                    className="bookFunctions__function" 
                    title="Delete book"
                    action={userInteractionStore.propmtDeleteConfirmation.bind(null, this.props.book)}
                />
            </div>
        );
    }
}
