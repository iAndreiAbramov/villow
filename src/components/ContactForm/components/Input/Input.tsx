import React from 'react';
import { Field } from 'react-final-form';
import { cn } from '@bem-react/classname';

import { IInputProps } from './Input.types';

const CnInput = cn('input');

export const Input: React.FC<IInputProps> = ({
    label,
    name,
    placeholder,
    required = false,
    isTextarea,
}) => {
    return (
        <Field name={name}>
            {({ input, meta }) => (
                <label className={CnInput()}>
                    <div className={CnInput('labelText')}>
                        <span>{label}</span>
                        {required && <span className={CnInput('asterisk')}>*</span>}
                    </div>
                    {isTextarea ? (
                        <textarea
                            {...input}
                            className={CnInput('input', {
                                error:
                                    meta.invalid && meta.submitFailed && !meta.dirtySinceLastSubmit,
                                textArea: true,
                            })}
                            placeholder={placeholder}
                        />
                    ) : (
                        <input
                            {...input}
                            className={CnInput('input', {
                                error:
                                    meta.invalid && meta.submitFailed && !meta.dirtySinceLastSubmit,
                            })}
                            type="text"
                            placeholder={placeholder}
                        />
                    )}
                </label>
            )}
        </Field>
    );
};
