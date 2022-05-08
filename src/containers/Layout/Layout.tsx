import React from 'react';
import { Outlet } from 'react-router-dom';
import { FooterContainer } from 'containers/FooterContainer';

import { FooterContent } from 'components/FooterContent/FooterContent';

export const Layout: React.FC = () => {
    return (
        <>
            <Outlet />
            <FooterContainer>
                <FooterContent />
            </FooterContainer>
        </>
    );
};
