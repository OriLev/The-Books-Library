import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { ConnectedComponent } from '../../util/ConnectedComponent';
import { AppStore } from '../../stores/AppStore';
import { FormField } from '../FormField/FormField';

@inject('appStore')
@observer
export class BookForm extends ConnectedComponent<{}, {appStore: AppStore}> {
    render() {
        const { bookFormStore } = this.connected.appStore;
        const { 
            title,
            author,
            publicationDate,
            titleMessage,
            titleValid,
            authorMessage,
            authorValid,
            publicationDateMessage,
            publicationDateValid,
        } = bookFormStore;
        const formFieldProps = {
            title: {
                fieldName: 'Title',
                content: title,
                message: titleMessage,
                inputValid: titleValid,
                placeholder: 'Please enter book title',
                onChange: (e: React.FormEvent<HTMLInputElement>) => {
                    bookFormStore.title = e.currentTarget.value;
                }
            },
            author: {
                fieldName: 'Author',
                content: author,
                message: authorMessage,
                inputValid: authorValid,
                placeholder: 'Please enter book author',
                onChange: (e: React.FormEvent<HTMLInputElement>) => {
                    bookFormStore.author = e.currentTarget.value;
                }
            },
            publicationDate: {
                fieldName: 'Publication Date',
                content: publicationDate,
                message: publicationDateMessage,
                inputValid: publicationDateValid,
                placeholder: 'Please enter book publication date (YYYY-MM-DD)',
                onChange: (e: React.FormEvent<HTMLInputElement>) => {
                    bookFormStore.publicationDate = e.currentTarget.value;
                }
            } 
        };
        return (
            <form className="bookForm" onSubmit={(e) => e.preventDefault()}>
                <FormField {...(formFieldProps.title)} />
                <FormField {...formFieldProps.author} />
                <FormField {...formFieldProps.publicationDate}/> 
            </form>
        );
    }   
}
