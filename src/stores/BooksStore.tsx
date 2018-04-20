import { decorate, observable, } from 'mobx';

export interface Book {
    id: number;
    author: string;
    publicationDate: string;
    title: string;
    coverImgURL: string;
}

export class BooksStore {
    books: Book[] = [];
    constructor() {
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
    }
}

decorate(BooksStore, {
    books: observable,
});
export const booksStore = new BooksStore();
