import { AppRoute } from 'constants/AppRoute';
import { QueryParams } from 'constants/QueryParams';

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContentContainer } from 'containers/ContentContainer';
import { HomePromoSection } from 'containers/HomePromoSection';
import { useQuery } from 'hooks/useQuery';
import { ReactComponent as Plane } from 'icons/plane.svg';

import { Button } from 'components/Button';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const query = useQuery();

    useEffect(() => {
        if (query.get(QueryParams.Tab) === null) {
            query.set(QueryParams.Tab, '1');
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
                <h2>Content</h2>
                <p>text text text</p>
                <Link to={AppRoute.Policy()}>Policy page</Link>
                <Link to={AppRoute.Eula()}>Eula page</Link>
                <Button onClick={() => alert('plane')}>
                    <Plane />
                    Send
                </Button>
            </ContentContainer>
        </>
    );
};
