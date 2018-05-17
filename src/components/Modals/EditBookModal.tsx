import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { ConnectedComponent } from '../../util/ConnectedComponent';
import { AppStore } from '../../stores/AppStore';
// import { UserInteractionStore } from '../../stores/UserInteractionStore';
// import { BookFormStore } from '../../stores/BookFormStore';
import { FormModal } from './FormModal';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { ModalBody } from './ModalBody';
import { BookForm } from '../BookForm/BookForm';
import { OkButton, CancelButton } from '../Buttons/Buttons';

import './ModalStyles.css';

@inject('appStore')
@observer
export class EditBookModal extends ConnectedComponent<{}, {appStore: AppStore}> {
    render() { 
        const { userInteractionStore, bookFormStore } = this.connected.appStore;
        const modalProps = {
            isOpen: userInteractionStore.editBookModalShowing,
            onRequestClose: userInteractionStore.cancelBookEdit,
        };

        const { title } = userInteractionStore.currentBook;
        const headerMessage = `Please edit the details of "${title}":`;

        const okButtonProps = {
            className: 'footerButton',
            title: 'Save book',
            action: () => {
                userInteractionStore.saveEditedBook();
            },
            disabled: !bookFormStore.formValid,
        };
        const cancelButtonProps = {
            className: 'footerButton',
            title: 'Cancel book edit',
            action: userInteractionStore.cancelBookEdit,
        };
        return (
            <FormModal {...modalProps}>
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
