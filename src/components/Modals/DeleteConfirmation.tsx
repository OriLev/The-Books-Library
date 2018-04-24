import * as React from 'react';
import * as ReactModal from 'react-modal';
import { observer, inject } from 'mobx-react';
import { AppStore } from '../../stores/AppStore';
import { ModalsStore } from '../../stores/ModalsStore';

interface DeleteConfirmationProps {
    appStore?: AppStore;
}

export const DeleteConfirmation = inject('appStore')(observer(({appStore}: DeleteConfirmationProps) => {
    // if (appStore) {
        const { modalsStore }: {modalsStore: ModalsStore} = appStore!;
        const bookTitle = modalsStore.bookToDelete!;
        return (
            <ReactModal
                isOpen={modalsStore.deleteConfirmationShowing}
                onRequestClose={modalsStore.denyDeletion}
                // appElement={this}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
                shouldReturnFocusAfterClose={false}
                style={{
                    content: {
                        width: '300px',
                        height: '200px',
                        margin: '10% auto',
                        fontWeight: 'bolder',
                    }
                }}
            >
                Are you sure you want to delete {modalsStore.bookToDelete ? modalsStore.bookToDelete.title : null}?
                <input type="button" className="addBookButton" onClick={modalsStore.denyDeletion} />
                <input
                    type="button"
                    className="pressable bookFunctions__function bookFunctions__function--delete"
                    onClick={(e) => {
                        if (modalsStore.bookToDelete) {
                            const { id } = modalsStore.bookToDelete;
                            return modalsStore.confirmDeletion(id);
                        }
                    }}
                />
            </ReactModal>
        );
    // } else {
    //     return null;
    // }

}));