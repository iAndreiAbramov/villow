import React from 'react';
import { Field } from 'react-final-form';
import { cn } from '@bem-react/classname';
import { ReactComponent as Triangle } from 'icons/triangle.svg';

import { ISelectProps } from './Select.types';

const CnInput = cn('input');

export const Select: React.FC<ISelectProps> = ({ name, label, required = false, options }) => {
    return (
        <Field name={name}>
            {({ input, meta }) => (
                <label className={CnInput()}>
                    <div className={CnInput('labelText')}>
                        <span>{label}</span>
                        {required && <span className={CnInput('asterisk')}>*</span>}
                    </div>
                    <div className="select-wrapper">
                        <select
                            className={CnInput('input', {
                                select: true,
                                error:
                                    meta.invalid && meta.submitFailed && !meta.dirtySinceLastSubmit,
                            })}
                            {...input}
                        >
                            {options.map((item) => (
                                <option defaultChecked={false} value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <Triangle className="triangle" />
                    </div>
                </label>
            )}
        </Field>
    );
};
