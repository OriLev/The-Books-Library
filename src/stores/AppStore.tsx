import { BooksStore } from './BooksStore';
import { ModalsStore } from './ModalsStore';

export class AppStore {
    booksStore: BooksStore;
    modalsStore: ModalsStore;

    constructor() {
        this.booksStore = new BooksStore(this);
        this.modalsStore = new ModalsStore(this);
    }
}
