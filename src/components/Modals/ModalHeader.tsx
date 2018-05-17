import * as React from 'react';

interface ModalHeaderProps {
    message: string;
}

export const ModalHeader = ({message}: ModalHeaderProps) => {
    return (
        <header className="modalHeader">
            <h3>{message}</h3>
        </header>
    );
};