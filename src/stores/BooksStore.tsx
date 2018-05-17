import { observable, action } from 'mobx';
import * as uuidv4 from 'uuid/v4';

import { AppStore } from './AppStore';
import { getBookList } from '../util/api';

export class BooksStore {
    appStore: AppStore;

    @observable
    books: Book[] = [];

    constructor(appStore: AppStore) {
        this.appStore = appStore;
        getBookList().then(books => {
            books.forEach((bookData: EditableFields) => {
                const book = this.buildNewBook(bookData);
                this.addBook(book);
            });
        });
        this.findBook = this.findBook.bind(this);
        this.findBookIndex = this.findBookIndex.bind(this);
    }

    findBook(key: 'id'|'title', value: string) {
        const bookIndex = this.findBookIndex(key, value);
        return ((bookIndex > -1) ? this.books[bookIndex] : null);
    }

    findBookIndex(key: 'id'|'title', value: string) {
        if (key === 'title') {
            value = this.getDBTitle(value);
        }
        return this.books.findIndex((element) => element[key] === value);
    }

    getDBTitle(title: string) {
        const formattedTitle = title.split(' ')
        .filter(word => word !== '')
        .map(word => word.replace(/\W|\d|_/g , ''))
        .join(' ')
        .toLowerCase();
        return formattedTitle;
    }

    getDisplayTitle(title: string) {
        if (title === '') {
            return '';
        }
        return title.split(' ').map(word => (word[0].toUpperCase() + word.slice(1))).join(' ');
    }
    
    @action.bound
    addBook(book: Book) {
        book.title = this.getDBTitle(book.title); 
        this.books.push(book);
    }

    @action.bound
    buildNewBook(bookData: EditableFields): Book {
        const { title, author, publicationDate } = bookData;
        return { 
            title,
            author, 
            publicationDate, 
            id: uuidv4(),
        };
    }

    @action.bound
    updateBook({editedBookId, newBookData}: {editedBookId: string, newBookData: EditableFields}) {
        const {title, author, publicationDate} = newBookData;
        const dBTitle = this.getDBTitle(title);
        const bookIndex = this.findBookIndex('id', editedBookId);
        const newBook = Object.assign(this.books[bookIndex], {title: dBTitle, author, publicationDate});
        this.books.splice(bookIndex, 1, newBook);
    }

    @action.bound
    deleteBook(book: Book) {
        const { id } = book;
        const bookIndex = this.findBookIndex('id', id);
        this.books.splice(bookIndex, 1);
    }
}
