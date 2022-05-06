import { AppRoute } from 'constants/AppRoute';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'containers/Layout';
import { ContactUsPage } from 'pages/ContactUsPage';
import { EulaPage } from 'pages/EulaPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PrivacyPage } from 'pages/PrivacyPage';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Home()} element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path={AppRoute.Privacy()} element={<PrivacyPage />} />
                    <Route path={AppRoute.Eula()} element={<EulaPage />} />
                    <Route path={AppRoute.Contact()} element={<ContactUsPage />} />
                    <Route path={AppRoute.NotFound()} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
