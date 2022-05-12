import { AppRoute } from 'constants/AppRoute';

import React, { RefObject, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactUsPage } from 'pages/ContactUsPage';
import { EulaPage } from 'pages/EulaPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PrivacyPage } from 'pages/PrivacyPage';

import { Layout } from 'components/Layout';

export const RefContext = React.createContext({
    aboutRef: null as RefObject<HTMLHeadingElement> | null,
    remoteRef: null as RefObject<HTMLHeadingElement> | null,
});

export const App: React.FC = () => {
    const aboutRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const remoteRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);

    return (
        <RefContext.Provider value={{ aboutRef, remoteRef }}>
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
        </RefContext.Provider>
    );
};
