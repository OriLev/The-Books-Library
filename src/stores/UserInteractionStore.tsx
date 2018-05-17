import { observable, action } from 'mobx';

import { AppStore } from './AppStore';

export class UserInteractionStore {
    appStore: AppStore;

    @observable
    addBookModalShowing: boolean = false;
    
    @observable
    editBookModalShowing: boolean = false;
    
    @observable
    deleteConfirmationShowing: boolean = false;
    
    currentBook: Book;

    constructor(appStore: AppStore) {
        this.appStore = appStore;
        this.currentBook = this.emptyBook;
    }

    get emptyBook() {
        return {
            id: '',
            title: '',
            author: '',
            publicationDate: '',
        };
    }

    @action.bound
    setCurrentBook(book: Book) {
        const { booksStore } = this.appStore;
        for (let key in book) {
            if (book.hasOwnProperty(key)) {
                if (key === 'title') {
                    this.currentBook.title = booksStore.getDisplayTitle(book.title);
                } else {
                    this.currentBook[key] = book[key];
                }
            }
        }
    }
    @action.bound
    toggleAddBookModal() {
        this.addBookModalShowing = !this.addBookModalShowing;
    }
    
    @action.bound
    promptAddBookModal() {
        const { setFormData }  = this.appStore.bookFormStore;
        setFormData(this.currentBook);
        this.toggleAddBookModal();
    }
    
    @action.bound
    saveNewBook() {
        const { getFormData } = this.appStore.bookFormStore;
        const { addBook: addBookToLibrary, buildNewBook } = this.appStore.booksStore;
        this.setCurrentBook(buildNewBook(getFormData()));
        addBookToLibrary(this.currentBook);
        this.setCurrentBook(this.emptyBook);
        this.promptAddBookModal();
    }
    
    @action.bound
    cancelBookAddition() {
        this.promptAddBookModal();
    }
    
    @action.bound
    toggleDeleteConfirmation() {
        this.deleteConfirmationShowing   = !this.deleteConfirmationShowing;
    }
    
    @action.bound
    propmtDeleteConfirmation(book: Book) {
        this.setCurrentBook(book);
        this.toggleDeleteConfirmation();
    }
    
    @action.bound
    confirmDeletion() {
        const { deleteBook, }  = this.appStore.booksStore;
        deleteBook(this.currentBook);
        this.setCurrentBook(this.emptyBook);
        this.toggleDeleteConfirmation();
    }
    
    @action.bound
    denyDeletion() {
        this.setCurrentBook(this.emptyBook);
        this.toggleDeleteConfirmation();
    }
    
    @action.bound
    toggleEditBookModal() {
        this.editBookModalShowing = !this.editBookModalShowing;
    }
    
    @action.bound
    promptEditBookModal(book?: Book) {
        const { bookFormStore }  = this.appStore;
        this.setCurrentBook(book ? book : this.emptyBook);
        bookFormStore.setFormData(this.currentBook);
        this.toggleEditBookModal();
    }
    
    @action.bound
    saveEditedBook() {
        const { booksStore, bookFormStore } = this.appStore;
        const newBookData = bookFormStore.getFormData();
        const { id: editedBookId } = this.currentBook;
        booksStore.updateBook({ editedBookId, newBookData });
        this.promptEditBookModal();
    }
    
    @action.bound
    cancelBookEdit() {
        this.promptEditBookModal();
    }
}
