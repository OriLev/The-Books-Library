import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { ConnectedComponent } from '../../util/ConnectedComponent';
import { AppStore } from '../../stores/AppStore';
import { PromptModal } from './PromptModal';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { DeleteBookButton, CancelButton } from '../Buttons/Buttons';

import './ModalStyles.css';

@inject('appStore')
@observer
export class DeleteConfirmation extends ConnectedComponent<{}, {appStore: AppStore}> {
    render() {
        const { userInteractionStore } = this.connected.appStore;
        const modalProps = {
            isOpen: userInteractionStore.deleteConfirmationShowing,
            onRequestClose: userInteractionStore.denyDeletion,
        };

        const { title } = userInteractionStore.currentBook;
        const headerMessage = `Are you sure you want to delete "${title}"?`;

        const deleteButtonProps = {
            className: 'footerButton',
            title: 'Delete book',
            action: userInteractionStore.confirmDeletion,
        };
        const cancelButtonProps = {
            className: 'footerButton', 
            title: 'Cancel deletion',
            action: userInteractionStore.denyDeletion,
        };          

        return (
            <PromptModal {...modalProps} >
                <ModalHeader message={headerMessage} />
                <ModalFooter> 
                    <DeleteBookButton {...deleteButtonProps}/> 
                    <CancelButton {...cancelButtonProps}/>
                </ModalFooter>
            </PromptModal>
        );
    }
}
