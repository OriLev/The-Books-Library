import { observable, computed, action } from 'mobx';
import * as moment from 'moment';

import { AppStore } from './AppStore';

export class BookFormStore {
    appStore: AppStore;

    @observable
    title: string;
    @observable
    author: string;
    @observable
    publicationDate: string;
    
    constructor(appStore: AppStore) {
        this.appStore = appStore;
        this.getFormData = this.getFormData.bind(this);
    }

    @action.bound
    setFormData(book: Book) {
        const { booksStore } = this.appStore;
        const {title, author, publicationDate, } = book;
        this.title = booksStore.getDisplayTitle(title);
        this.author = author;
        this.publicationDate = publicationDate;
    }

    getFormData() {
        const { title, author, publicationDate } = this;
        return { title, author, publicationDate };
    }

    isEmpty(input: string) {
        if (!input || input.trim() === '') {
            return true;
        }
        return false;
    }

    isDateValid(input: string) {
        return moment(input, 'YYYY-MM-DD', true).isValid();
    }

    isFieldValid(message: string) {
        if (message === '') {
            return true;
        }
        return false;
    }

    @computed
    get titleMessage() {
        if (this.isEmpty(this.title)) {
            return 'Title cannot be empty';
        }
        if (!this.isTitleUnique) {
            return 'Title already exists in the Book Library';
        }
        return '';
    }

    @computed
    get isTitleUnique() {
        const { findBook } = this.appStore.booksStore;
        const { id } = this.appStore.userInteractionStore.currentBook;
        const duplicateBook = findBook('title', this.title);
        if (duplicateBook && id !== duplicateBook.id) {
            return false;
        }
        return true;
    }

    @computed
    get titleValid() {
        return this.isFieldValid(this.titleMessage);
    }

    @computed
    get authorMessage() {
        if (this.isEmpty(this.author)) {
            return 'Author cannot be empty';
        }
        return '';
    }

    @computed
    get authorValid() {
        return this.isFieldValid(this.authorMessage);
    }

    @computed
    get publicationDateMessage() {
        if (this.isEmpty(this.publicationDate)) {
            return 'Publication date cannot be empty';
        }
        if (!this.isDateValid(this.publicationDate)) {
            return 'The publication date is in the wrong format (should be YYYY-MM-DD)';
        }
        return '';
    }

    @computed
    get publicationDateValid() {
        return this.isFieldValid(this.publicationDateMessage);
    }

    @computed
    get formValid() {
        return (this.titleValid && this.authorValid && this.publicationDateValid);
    }
}
