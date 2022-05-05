import React from 'react';
import { Field } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { IInputProps } from './Input.types';

const CnInput = cn('input');

export const Input: React.FC<IInputProps> = ({
    label,
    type = 'text',
    name,
    placeholder,
    required = false,
    hasError,
    isTextarea,
}) => {
    return (
        <Field name={name}>
            {({ input }) => (
                <label className={CnInput()}>
                    <div className={CnInput('labelText')}>
                        <span>{label}</span>
                        {required && <span className={CnInput('asterisk')}>*</span>}
                    </div>
                    {isTextarea ? (
                        <textarea
                            {...input}
                            className={CnInput('input', { error: hasError, textArea: true })}
                            placeholder={placeholder}
                            required={required}
                        />
                    ) : (
                        <input
                            {...input}
                            className={CnInput('input', { error: hasError })}
                            type={type}
                            placeholder={placeholder}
                            required={required}
                        />
                    )}
                </label>
            )}
        </Field>
    );
};
