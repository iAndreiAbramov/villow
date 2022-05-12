import React from 'react';

import { IButton } from './Button.types';

import './Button.scss';

export const Button = React.forwardRef<HTMLButtonElement, IButton>(
    ({ customClass, children, ...props }, ref) => {
        return (
            <button ref={ref} className={`button ${customClass ? customClass : ''}`} {...props}>
                {children}
            </button>
        );
    },
);
