import * as React from 'react';
import { observer, } from 'mobx-react';
import { Book } from '../../stores/BooksStore';
import { BookDisplay } from '../BookDisplay/BookDisplay';
import './BookList.css';

export const BookList = observer(({store}) => {
    const { books } = store;
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
});
