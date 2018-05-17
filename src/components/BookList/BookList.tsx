import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { ConnectedComponent } from '../../util/ConnectedComponent';
import { AppStore } from '../../stores/AppStore';
import { BookDisplay } from '../BookDisplay/BookDisplay';
import './BookList.css';

@inject('appStore')
@observer
export class BookList extends ConnectedComponent<{}, {appStore: AppStore}> {
    render() {
        const { books } = this.connected.appStore.booksStore;
        return (
            <div className="booksContainer">
                <ul className="booksList">
                    {
                        books.map((book: Book) => {
                            const { id } = book;
                            return (
                                <li className="booksList__book" key={id}>
                                    <BookDisplay book={book}/>
                                </li>
                            );
                        })                
                    }
                </ul>
            </div>
        );
    }
}
