import * as React from 'react';
import './FormField.css';

interface FormFieldProps {
    fieldName: string;
    content: string;
    message: string;
    placeholder: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    inputValid: boolean;
}

export const FormField = ({fieldName, content, message, placeholder, onChange, inputValid}: FormFieldProps) => {
    const inputId = fieldName.split(' ').join('_');
    const inputProps = {
        type: 'text',
        id: inputId,
        value: content,
        placeholder,
        onChange,
        className: `bookForm__field__input bookForm__field__input--${inputValid ? 'valid' : 'inValid'}`,
    };
    return (
        <p className="bookForm__field">
            <label htmlFor={inputId} className="bookForm__field__label"> {fieldName} </label>
            <input {...inputProps}/>
            <span className="bookForm__field__message"> {message} </span>
        </p>
    );
};