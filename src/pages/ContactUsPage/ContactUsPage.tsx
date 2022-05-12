import { AppRoute } from 'constants/AppRoute';
import { HeaderNavItems } from 'constants/nav-items';

import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'icons/logo.svg';

import { ContactForm } from 'components/ContactForm';
import { ContentContainer } from 'components/ContentContainer';
import { HeaderContainer } from 'components/HeaderContainer';
import { HeaderNav } from 'components/HeaderNav';
import { MainContainer } from 'components/MainContainer';

export const ContactUsPage: React.FC = () => {
    return (
        <>
            <HeaderContainer isDynamicBg>
                <header className="header container">
                    <Link to={AppRoute.Home()}>
                        <Logo className="header-logo" />
                    </Link>
                    <HeaderNav items={HeaderNavItems} />
                </header>
            </HeaderContainer>
            <MainContainer>
                <div className="contactUs-promo" />
                <ContentContainer>
                    <div className="container">
                        <ContactForm />
                    </div>
                </ContentContainer>
            </MainContainer>
        </>
    );
};
