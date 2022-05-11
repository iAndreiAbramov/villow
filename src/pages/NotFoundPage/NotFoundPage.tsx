import { AppRoute } from 'constants/AppRoute';
import { HeaderNavItems } from 'constants/nav-items';

import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { ContentContainer } from 'containers/ContentContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { MainContainer } from 'containers/MainContainer';
import { ReactComponent as Logo } from 'icons/logo.svg';

import { HeaderNav } from 'components/HeaderNav';

import './NotFoundPage.scss';

const CnNotFound = cn('notFound');

export const NotFoundPage: React.FC = () => {
    return (
        <>
            <HeaderContainer customClassName="header-container_black">
                <header className="header container">
                    <Link to={AppRoute.Home()}>
                        <Logo className="header-logo" />
                    </Link>
                    <HeaderNav items={HeaderNavItems} />
                </header>
            </HeaderContainer>
            <MainContainer>
                <ContentContainer>
                    <div className="container">
                        <div className={CnNotFound()}>
                            <div className={CnNotFound('bigLetters')}>404</div>
                            <div className={CnNotFound('title')}>Page not found.</div>
                            <div className={CnNotFound('clarification')}>
                                The page you went to was not found or does not exist.
                            </div>
                            <Link className={CnNotFound('link')} to={AppRoute.Home()}>
                                Home
                            </Link>
                        </div>
                    </div>
                </ContentContainer>
            </MainContainer>
        </>
    );
};
