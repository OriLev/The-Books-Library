import * as React from 'react';
import './BookFields.css';

export const BookFields = ({publicationDate, title, author}: EditableFields) => {
    return (
        <div className="bookFields">
            <h5 className="bookFields__field bookFields__field--date"><i>{publicationDate}</i></h5>
            <h3 className="bookFields__field bookFields__field--title">{title}</h3>
            <span className="bookFields__field"><i>by</i></span>
            <h5 className="bookFields__field bookFields__field--author">{author}</h5>
        </div>
    );
};
