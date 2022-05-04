import { AppRoute } from 'constants/AppRoute';
import { HeaderNavItems } from 'constants/nav-items';

import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FooterContainer } from 'containers/FooterContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { MainContainer } from 'containers/MainContainer';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { EulaPage } from 'pages/EulaPage';
import { HomePage } from 'pages/HomePage';
import { PrivacyPage } from 'pages/PrivacyPage';

import { FooterContent } from 'components/FooterContent/FooterContent';
import { HeaderNav } from 'components/HeaderNav';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <HeaderContainer>
                <header className="header container">
                    <Link to={AppRoute.Home()}>
                        <Logo className="header-logo" />
                    </Link>
                    <HeaderNav items={HeaderNavItems} />
                </header>
            </HeaderContainer>
            <MainContainer>
                <Routes>
                    <Route path={AppRoute.Home()} element={<HomePage />} />
                    <Route path={AppRoute.Privacy()} element={<PrivacyPage />} />
                    <Route path={AppRoute.Eula()} element={<EulaPage />} />
                </Routes>
            </MainContainer>
            <FooterContainer>
                <FooterContent />
            </FooterContainer>
        </BrowserRouter>
    );
};
