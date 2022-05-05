import React from 'react';
import { Field } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { IInputProps } from './Input.types';

import './Input.scss';

const CnInput = cn('input');

export const Input: React.FC<IInputProps> = ({ label, type = 'text', name, placeholder, required = false, error }) => {
    return (
        <Field name={name}>
            {() => (
                <label className={CnInput()}>
                    <span className={CnInput('labelText')}>
                        {label}
                        {!!required && <span className={CnInput('asterisk')}> *</span>}
                    </span>
                    <input
                        className={CnInput('input', { error: !!error })}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                    />
                    <div className={CnInput('error')}>{!!error && error}</div>
                </label>
            )}
        </Field>
    );
};
