import * as React from 'react';
import './ModalStyles.css';

export const ModalFooter: React.StatelessComponent<{}> = ({ children }) => {
    return (
        <footer className="modalFooter">
            {children}
        </footer>
    );
};