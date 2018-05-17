import * as React from 'react';
import './Buttons.css';

interface ButtonProps {
    action: () => void;
    style?: {};
    className?: string;
    title?: string;
    disabled?: boolean;
}

const Button = ({action, style, className, title, disabled }: ButtonProps) => {
    const buttonProps = {
        type: 'button',
        className: (className ? className + ' ' : '') + 'pressable button',
        onClick: action,
        style,
        title,
        disabled,
    };
    return (
        <input {...buttonProps}/>
    );
}; 

export const AddBookButton = ({action, style, className, title}: ButtonProps) => {
    const buttonProps = {
        className: 'addBookButton' + (className ? ' ' + className : ''),
        title,
        action,
        style,
    };
    return (
        <Button {...buttonProps}/>
    );
};

export const DeleteBookButton = ({action, style, className, title}: ButtonProps) => {
    const buttonProps = {
        className: 'deleteBookButton' + (className ? ' ' + className : ''),
        title,
        action,
        style,
    };
    return (
        <Button {...buttonProps}/>
    );
};

export const EditBookButton = ({action, style, className, title}: ButtonProps) => {
    const buttonProps = {
        className: 'editBookButton' + (className ? ' ' + className : ''),
        title,
        action,
        style,
    };
    return (
        <Button {...buttonProps}/>
    );
};

export const OkButton = ({action, style, className, title, disabled}: ButtonProps) => {
    const buttonProps = {
        className: 'okButton' + (className ? ' ' + className : ''),
        disabled,
        title,
        action,
        style,
    };
    return (
        <Button {...buttonProps}/>
    );
};

export const CancelButton = ({action, style, className, title}: ButtonProps) => {
    const buttonProps = {
        className: 'cancelButton' + (className ? ' ' + className : ''),
        title,
        action,
        style,
    };
    return (
        <Button {...buttonProps}/>
    );
};
