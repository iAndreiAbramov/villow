import { AppRoute } from 'constants/AppRoute';
import { HeaderNavItems } from 'constants/nav-items';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FooterContainer } from 'containers/FooterContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { MainContainer } from 'containers/MainContainer';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { EulaPage } from 'pages/EulaPage';
import { HomePage } from 'pages/HomePage';
import { PolicyPage } from 'pages/PolicyPage';

import { FooterContent } from 'components/FooterContent/FooterContent';
import { HeaderNav } from 'components/HeaderNav';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <HeaderContainer>
                <header className="header container">
                    <Logo className="header-logo" />
                    <HeaderNav items={HeaderNavItems} />
                </header>
            </HeaderContainer>
            <MainContainer>
                <Routes>
                    <Route path={AppRoute.Home()} element={<HomePage />} />
                    <Route path={AppRoute.Policy()} element={<PolicyPage />} />
                    <Route path={AppRoute.Eula()} element={<EulaPage />} />
                </Routes>
            </MainContainer>
            <FooterContainer>
                <FooterContent />
            </FooterContainer>
        </BrowserRouter>
    );
};
