import { decorate, observable, } from 'mobx';
import { AppStore } from './AppStore';
import { Book, } from './BooksStore';

export class ModalsStore {
    appStore: AppStore;
    addBookModalShowing: boolean = false;
    editBookModalShowing: boolean = false;
    deleteConfirmationShowing: boolean = false;
    bookToDelete: Book|null = null;

    constructor(appStore: AppStore) {
        this.appStore = appStore;
    }

    toggleAddBookModal = () => {
        this.addBookModalShowing = !this.addBookModalShowing;
    }
    toggleDeleteConfirmation = () => {
        this.deleteConfirmationShowing   = !this.deleteConfirmationShowing;
    }
    propmtDeleteConfirmation = (id: number) => {
        const { books, findBook, }  = this.appStore.booksStore;
        this.bookToDelete = books[findBook(id)];
        if (this.bookToDelete) {
            this.toggleDeleteConfirmation();
        }
    }
    confirmDeletion = (id: number) => {
        const { deleteBook, }  = this.appStore.booksStore;
        deleteBook(id);
        this.bookToDelete = null;
        this.toggleDeleteConfirmation();
    }
    denyDeletion = () => {
        this.bookToDelete = null;
        this.toggleDeleteConfirmation();
    }
}

decorate(ModalsStore, {
    addBookModalShowing: observable,
    editBookModalShowing: observable,
    deleteConfirmationShowing: observable,
});
