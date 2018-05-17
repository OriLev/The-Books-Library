import * as React from 'react';
import { inject } from 'mobx-react';

import { ConnectedComponent } from '../../util/ConnectedComponent';
import { AppStore } from '../../stores/AppStore';
import { BookFunctions } from '../BookFunctions/BookFunctions';
import { BookFields } from '../BookFields/BookFields';
import './BookDisplay.css';

@inject('appStore')
export class BookDisplay extends ConnectedComponent<{book: Book}, {appStore: AppStore}> {
    render() {
        const { book } = this.props;
        const { title, publicationDate, author } = book;
        const { getDisplayTitle } = this.connected.appStore.booksStore;
        const bookFieldsProps = { title: getDisplayTitle(title), publicationDate, author };
        return (
            <div className="bookDisplay">
                <BookFunctions book={book} />
                <BookFields {...bookFieldsProps} />
            </div>
        );
    }
}      
