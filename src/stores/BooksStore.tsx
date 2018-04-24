import { decorate, observable, action } from 'mobx';
import { AppStore } from './AppStore';

export interface Book {
    id: number;
    author: string;
    publicationDate: string;
    title: string;
    coverImgURL: string;
}

export class BooksStore {
    appStore: AppStore;
    books: Book[] = [];
    constructor(appStore: AppStore) {
        this.appStore = appStore;
        fetch('http://192.168.1.16:8080/books.json', {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.books = data.books;
        });
        this.findBook = this.findBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    findBook(id: number) {
        return this.books.findIndex((element) => {
            return element.id === id;
        });
    }
    
    deleteBook(id: number) {
        // const books = this.books.
        const bookRef = this.findBook(id);
        this.books.splice(bookRef, 1);
        //  = [...this.books.slice(0, bookRef), ...this.books.slice(bookRef)];
    }
}

decorate(BooksStore, {
    books: observable,
    deleteBook: action,
});
