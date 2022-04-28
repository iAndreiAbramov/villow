import React from 'react';

import { IHeaderContainerProps } from './HeaderContainer.types';

export const HeaderContainer: React.FC<IHeaderContainerProps> = ({ customClassName, children }) => {
    return <div className={`header-container ${customClassName || ''}`}>{children}</div>;
};
