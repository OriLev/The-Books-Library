import * as React from 'react';
import './ModalStyles.css';

export const ModalBody: React.StatelessComponent<{}> = ({ children }) => {
    return (
        <div className="modalBody">
            {children}
        </div>
    );
};