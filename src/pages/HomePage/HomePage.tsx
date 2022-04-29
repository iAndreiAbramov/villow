import { AppRoute } from 'constants/AppRoute';

import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Plane } from 'icons/plane.svg';

import { Button } from 'components/Button';

export const HomePage: React.FC = () => {
    return (
        <>
            <h2>Content</h2>
            <p>text text text</p>
            <Link to={AppRoute.Policy()}>Policy page</Link>
            <Link to={AppRoute.Eula()}>Eula page</Link>
            <Button onClick={() => alert('plane')}>
                <Plane />
                Send
            </Button>
        </>
    );
};
