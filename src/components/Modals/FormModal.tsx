import * as React from 'react';
import * as ReactModal from 'react-modal';
import './ModalStyles.css';

interface ModalActions {
    isOpen: boolean;
    onRequestClose: ((event: MouseEvent | KeyboardEvent) => void) | undefined;
}

export const FormModal: React.StatelessComponent<ModalActions> = ({ isOpen, onRequestClose, children }) => {
    const modalProps = {
        isOpen,
        onRequestClose,
        shouldCloseOnOverlayClick: true,
        shouldCloseOnEsc: true,
        shouldReturnFocusAfterClose: false,
        style: {
            overlay: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            content: {
                position: 'unset',
                width: '400px',
                maxWidth: '90%',
                height: '500px',
                padding: '0',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
            }
        }
    };
    return (
        <ReactModal {...modalProps} >
            {children}
        </ReactModal>
    );
};
