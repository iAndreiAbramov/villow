import { AppRoute } from 'constants/AppRoute';
import { HeaderNavItems } from 'constants/nav-items';

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FooterContainer } from 'containers/FooterContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { MainContainer } from 'containers/MainContainer';
import { ReactComponent as Logo } from 'icons/logo.svg';

import { FooterContent } from 'components/FooterContent/FooterContent';
import { HeaderNav } from 'components/HeaderNav';

export const Layout: React.FC = () => {
    return (
        <>
            <HeaderContainer>
                <header className="header container">
                    <Link to={AppRoute.Home()}>
                        <Logo className="header-logo" />
                    </Link>
                    <HeaderNav items={HeaderNavItems} />
                </header>
            </HeaderContainer>
            <MainContainer>
                <Outlet />
            </MainContainer>
            <FooterContainer>
                <FooterContent />
            </FooterContainer>
        </>
    );
};
