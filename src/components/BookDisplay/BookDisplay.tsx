import * as React from 'react';
import { inject } from 'mobx-react';
// import Popup from "reactjs-popup";
import { Book, } from '../../stores/BooksStore';
import { ModalsStore, } from '../../stores/ModalsStore';
import { AppStore, } from '../../stores/AppStore';
import './BookDisplay.css';

const BookFunctions = ({ modalsStore, id }: { modalsStore: ModalsStore; id: number }) => (
    <div className="bookFunctions">
        <input
            title="edit book"
            className="pressable bookFunctions__function bookFunctions__function--edit"
            type="button"
        />
        <input
            title="delete book"
            className="pressable bookFunctions__function bookFunctions__function--delete"
            type="button"
            onClick={(e) => {
                if (modalsStore) {
                    return modalsStore.propmtDeleteConfirmation(id);
                }
            }}
        />
    </div>
);

const BookFields = ({publicationDate, title, author}: {publicationDate: string, title: string, author: string}) => (
    <div className="bookFields">
        <h5 className="bookFields__field bookFields__field--date"><i>{publicationDate}</i></h5>
        <h3 className="bookFields__field bookFields__field--title">{title}</h3>
        <span className="bookFields__field"><i>by</i></span>
        <h5 className="bookFields__field bookFields__field--author">{author}</h5>
        {/* <span className="bookFields__field">{coverImgURL}</span> */}
    </div>
);

interface BookDisplayProps {
    book: Book;
    appStore?: AppStore;
}

export const BookDisplay = inject('appStore')(
    ({ book, appStore }: BookDisplayProps) => {
        const { id, title, publicationDate, author } = book;
        const bookFieldsProps = { title, publicationDate, author };
        if (appStore) {
            const { modalsStore } = appStore;
            return (
                <div className="bookDisplay">
                    <BookFunctions id={id} modalsStore={modalsStore} />
                    <BookFields {...bookFieldsProps} />
                </div>
            );
        } else {
            return null;
        }
    }
);
