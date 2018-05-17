import * as React from 'react';
import * as ReactModal from 'react-modal';
import './ModalStyles.css';

interface ModalActions {
    isOpen: boolean;
    onRequestClose: ((event: MouseEvent | KeyboardEvent) => void) | undefined;
}

export const PromptModal: React.StatelessComponent<ModalActions> = ({ isOpen, onRequestClose, children }) => {
    const modalProps = {
        isOpen,
        onRequestClose,
        shouldCloseOnOverlayClick: false,
        shouldCloseOnEsc: false,
        shouldReturnFocusAfterClose: false,
        style: {
            overlay: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            content: {
                position: 'unset',
                width: '300px',
                height: '200px',
                padding: '0',
                margin: '10% auto',
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
