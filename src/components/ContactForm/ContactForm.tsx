import { countriesList } from 'constants/countries';

import React from 'react';
import { Form } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { Input } from './components/Input';
import { Select } from './components/Select';

import './ContactForm.scss';

const CnForm = cn('contactForm');

export const ContactForm: React.FC = () => {
    return (
        <Form onSubmit={() => alert('submit')}>
            {() => (
                <form className={CnForm()}>
                    <div className={CnForm('row')}>
                        <Input type="text" label="Name" name="name" required placeholder="Enter your name" />
                    </div>
                    <div className={CnForm('row')}>
                        <Input type="email" label="Email" name="email" required placeholder="Enter your email" />
                        <Select name="country" label="Country" options={countriesList} />
                    </div>
                    <Input
                        type={'text'}
                        label="Message"
                        name="message"
                        isTextarea
                        required
                        placeholder="Type your message"
                    />
                </form>
            )}
        </Form>
    );
};
