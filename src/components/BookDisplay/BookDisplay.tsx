import * as React from 'react';
// import Popup from "reactjs-popup";
import { Book } from '../../stores/BooksStore';
import './BookDisplay.css';

export const BookDisplay = ({ book }: { book: Book }) => {
    const { title, publicationDate, author } = book;
    return (
        <div className="bookDisplay">
            <div className="bookFunctions">
                {/* <Popup
                    trigger={<input
                        title="edit book"
                        className="pressable bookFunctions__function bookFunctions__function--edit"
                        type="button"
                    />}
                    modal="true"
                    closeOnDocumentClick="true"
                >
                    <span> Modal content </span>
                </Popup> */}
                <input
                        title="edit book"
                        className="pressable bookFunctions__function bookFunctions__function--edit"
                        type="button"
                />
                <input
                    title="delete book"
                    className="pressable bookFunctions__function bookFunctions__function--delete"
                    type="button"
                />
            </div>
            <div className="bookFields">
                <h5 className="bookFields__field bookFields__field--date"><i>{publicationDate}</i></h5>
                <h3 className="bookFields__field bookFields__field--title">{title}</h3>
                <span className="bookFields__field"><i>by</i></span>
                <h5 className="bookFields__field bookFields__field--author">{author}</h5>
                {/* <span className="bookFields__field">{coverImgURL}</span> */}
            </div>
        </div>
    );
};
