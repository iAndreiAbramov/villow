import { AppRoute } from 'constants/AppRoute';
import { QueryParam } from 'constants/QueryParam';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentContainer } from 'containers/ContentContainer';
import { HomePromoSection } from 'containers/HomePromoSection';
import { useQuery } from 'hooks/useQuery';

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
            <HomePromoSection />
            <ContentContainer>
                <HomePageContent />
            </ContentContainer>
        </>
    );
};
