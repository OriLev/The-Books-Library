import { decorate, observable, } from 'mobx';

export class ModalsStore {
    addBookModalShowing: boolean = false;
    editBookModalShowing: boolean = false;
    deleteConfirmationShowing: boolean = false;

    // constructor() {
    // }

    toggleAddBookModal = () => {
        alert(this.addBookModalShowing);
        this.addBookModalShowing = !this.addBookModalShowing;
    }
}

decorate(ModalsStore, {
    addBookModalShowing: observable,
    editBookModalShowing: observable,
    deleteConfirmationShowing: observable,
});
export const modalsStore = new ModalsStore();
