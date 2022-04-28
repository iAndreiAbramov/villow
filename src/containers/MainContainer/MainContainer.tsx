import React from 'react';

import { IContentContainerProps } from './MainContainer.types';

export const MainContainer: React.FC<IContentContainerProps> = ({ customClassName, children }) => {
    return <main className={`main-container container ${customClassName || ''}`}>{children}</main>;
};
