import { AppRoute } from 'constants/AppRoute';
import { HeaderNavItems } from 'constants/nav-items';
import { QueryParam } from 'constants/QueryParam';

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContentContainer } from 'containers/ContentContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { HomePromoSection } from 'containers/HomePromoSection';
import { MainContainer } from 'containers/MainContainer';
import { useQuery } from 'hooks/useQuery';
import { ReactComponent as Logo } from 'icons/logo.svg';

import { HeaderNav } from 'components/HeaderNav';
import { HomePageContent } from 'components/HomePageContent';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const query = useQuery();

    useEffect(() => {
        if (query.get(QueryParam.Tab) === null) {
            query.set(QueryParam.Tab, '1');
            navigate({
                pathname: AppRoute.Home(),
                search: query.toString(),
            });
        }
    }, [query, navigate]);

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
                <HomePromoSection />
                <ContentContainer>
                    <HomePageContent />
                </ContentContainer>
            </MainContainer>
        </>
    );
};
