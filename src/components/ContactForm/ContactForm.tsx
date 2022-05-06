import { AppRoute } from 'constants/AppRoute';
import { appsList } from 'constants/appsList';
import { countriesList } from 'constants/countries';
import { Theme, themesList } from 'constants/themesList';

import React, { useCallback, useState } from 'react';
import { Form, FormSpy } from 'react-final-form';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { FormState } from 'final-form';
import { ReactComponent as Plane } from 'icons/plane.svg';
import { IFormValues } from 'types/form.types';

import { Button } from 'components/Button';

import { Input } from './components/Input';
import { Select } from './components/Select';

import './ContactForm.scss';

const CnForm = cn('contactForm');

export const ContactForm: React.FC = () => {
    const [isSupportSelected, setIsSupportSelected] = useState(false);

    const handleFormChange = useCallback((formState: FormState<Record<string, unknown>, Partial<IFormValues>>) => {
        if (formState.values.theme === Theme.Application) {
            setIsSupportSelected(true);
        } else {
            setIsSupportSelected(false);
        }
    }, []);

    const onSubmit = useCallback((values: IFormValues): void => {
        alert(JSON.stringify(values, null, ' '));
    }, []);

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={CnForm()} onSubmit={handleSubmit}>
                    <h2 className={CnForm('title')}>Contact Us</h2>
                    <div className={CnForm('row')}>
                        <Input type="text" label="Name" name="name" required placeholder="Enter your name" />
                    </div>
                    <div className={CnForm('row')}>
                        <Input type="email" label="Email" name="email" required placeholder="Enter your email" />
                        <Select name="country" label="Country" options={countriesList} />
                    </div>
                    <div className={CnForm('row')}>
                        <Select name="theme" label="Theme" options={themesList} required />
                    </div>
                    {isSupportSelected && (
                        <div className={CnForm('row')}>
                            <Select name="application" label="Application" options={appsList} />
                        </div>
                    )}
                    <div className={CnForm('row')}>
                        <Input
                            type={'text'}
                            label="Message"
                            name="message"
                            isTextarea
                            required
                            placeholder="Type your message"
                        />
                    </div>
                    <div className={CnForm('row')}>
                        <span className={CnForm('agreement')}>
                            By clicking the &ldquo;Submit&ldquo; button, I agree to the processing of the data specified
                            in the form in accordance with the
                            <Link to={AppRoute.Privacy()} className={CnForm('link')}>
                                Privacy Policy.
                            </Link>
                        </span>
                    </div>
                    <div className={CnForm('row')}>
                        <Button customClass={CnForm('button')} type="submit">
                            <Plane />
                            Send
                        </Button>
                    </div>
                    <FormSpy onChange={handleFormChange} />
                </form>
            )}
        </Form>
    );
};
