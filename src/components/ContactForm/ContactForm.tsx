import React from 'react';
import { Form } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { Input } from './components/Input';

import './ContactForm.scss';

const CnForm = cn('contactForm');

export const ContactForm: React.FC = () => {
    return (
        <Form onSubmit={() => alert('submit')}>
            {() => (
                <form className={CnForm()}>
                    <Input
                        type="text"
                        label="Name"
                        name="name"
                        required
                        error="Обязательное поле"
                        placeholder="Enter your name"
                    />
                </form>
            )}
        </Form>
    );
};
