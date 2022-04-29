import React from 'react';

import { IMainContainerProps } from './MainContainer.types';

export const MainContainer: React.FC<IMainContainerProps> = ({ customClassName, children }) => {
    return <main className={`main-container ${customClassName ? customClassName : ''}`}>{children}</main>;
};
