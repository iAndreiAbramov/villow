import React from 'react';

import { IContentContainerProps } from './ContentContainer.types';

export const ContentContainer: React.FC<IContentContainerProps> = ({ customClassName, children }) => {
    return (
        <section className={`main-container container ${customClassName ? customClassName : ''}`}>{children}</section>
    );
};
