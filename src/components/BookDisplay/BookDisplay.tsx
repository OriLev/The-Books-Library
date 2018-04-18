import * as React from 'react';
import { Book } from '../../stores/BooksStore';
import './BookDisplay.css';

export const BookDisplay = ({ book }: {book: Book}) => {
    const { title, publicationDate, author } = book;
    return (
        <div className="bookDisplay">
            <h5 className="bookDisplay__field bookDisplay__field--date"><i>{publicationDate}</i></h5>
            <h3 className="bookDisplay__field bookDisplay__field--title">{title}</h3>
            <span className="bookDisplay__field"><i>by</i></span>
            <h5 className="bookDisplay__field bookDisplay__field--author">{author}</h5>
            {/* <span className="bookDisplay__field">{coverImgURL}</span> */}
        </div>
    );
};
