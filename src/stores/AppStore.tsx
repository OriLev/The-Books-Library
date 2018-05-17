import { BooksStore } from './BooksStore';
import { UserInteractionStore } from './UserInteractionStore';
import { BookFormStore } from './BookFormStore';

export class AppStore {
    booksStore: BooksStore;
    userInteractionStore: UserInteractionStore;
    bookFormStore: BookFormStore;

    constructor() {
        this.booksStore = new BooksStore(this);
        this.userInteractionStore = new UserInteractionStore(this);
        this.bookFormStore = new BookFormStore(this);
    }
}
