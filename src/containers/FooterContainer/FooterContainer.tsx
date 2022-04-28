import React from 'react';

import { IFooterContainerProps } from './FooterContainer.types';

export const FooterContainer: React.FC<IFooterContainerProps> = ({ customClassName, children }) => {
    return <div className={`footer-container ${customClassName || ''}`}>{children}</div>;
};
