import * as React from 'react';
import { Book } from '../../stores/BooksStore';
import './BookDisplay.css';

export const BookDisplay = ({ book }: { book: Book }) => {
    const { title, publicationDate, author } = book;
    return (
        <div className="bookDisplay">
            <div className="bookFunctions">
                <input className="pressable bookFunctions__function bookFunctions__function--edit" type="button"/>
                <input className="pressable bookFunctions__function bookFunctions__function--delete" type="button"/>
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
