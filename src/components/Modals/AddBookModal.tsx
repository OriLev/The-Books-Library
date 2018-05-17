import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { ConnectedComponent } from '../../util/ConnectedComponent';
import { AppStore } from '../../stores/AppStore';
import { FormModal } from './FormModal';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { ModalBody } from './ModalBody';
import { BookForm } from '../BookForm/BookForm';
import { OkButton, CancelButton } from '../Buttons/Buttons';

import './ModalStyles.css';

@inject('appStore')
@observer
export class AddBookModal extends ConnectedComponent<{}, {appStore: AppStore}> {
    render() {
        const { userInteractionStore, bookFormStore } = this.connected.appStore;
        const modalProps = {
            isOpen: userInteractionStore.addBookModalShowing,
            onRequestClose: userInteractionStore.cancelBookAddition,
        };
        const headerMessage = `Please enter the details of the book you want to add:`;

        const okButtonProps = {
            className: 'footerButton',
            title: 'Save book',
            action: () => {
                userInteractionStore.saveNewBook();
            },
            disabled: !bookFormStore.formValid,
        };
        const cancelButtonProps = {
            className: 'footerButton',
            title: 'Cancel book addition',
            action: userInteractionStore.cancelBookAddition,
        };
        return (
            <FormModal {...modalProps} >
                <ModalHeader message={headerMessage} />
                <ModalBody>
                    <BookForm />
                </ModalBody>
                <ModalFooter> 
                    <OkButton {...okButtonProps}/>
                    <CancelButton {...cancelButtonProps}/>
                </ModalFooter>
            </FormModal>
        );
    }
}
