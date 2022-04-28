import { AppRoute } from 'constants/AppRoute';
import { FooterDropdownOptions, HeaderDropdownOptions } from 'constants/dropdown-options';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FooterContainer } from 'containers/FooterContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { MainContainer } from 'containers/MainContainer';
import { EulaPage } from 'pages/EulaPage';
import { HomePage } from 'pages/HomePage';
import { PolicyPage } from 'pages/PolicyPage';

import { Dropdown } from 'components/Dropdown';
import { DropdownDirection } from 'components/Dropdown/Dropdown.types';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <HeaderContainer>
                <header className="header container">
                    <h2>Header</h2>
                    <Dropdown options={HeaderDropdownOptions} defaultName="Apps" direction={DropdownDirection.Down} />
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
                <footer className="footer container">
                    <h2>Footer</h2>
                    <Dropdown options={FooterDropdownOptions} direction={DropdownDirection.Up} />
                </footer>
            </FooterContainer>{' '}
        </BrowserRouter>
    );
};
