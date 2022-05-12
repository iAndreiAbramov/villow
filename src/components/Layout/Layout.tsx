import React from 'react';
import { Outlet } from 'react-router-dom';

import { FooterContainer } from 'components/FooterContainer';
import { FooterContent } from 'components/FooterContent';

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
