import { Anchor } from 'constants/Anchor';
import { AppRoute } from 'constants/AppRoute';
import { promoApps } from 'constants/promo-apps';
import { QueryParam } from 'constants/QueryParam';

import React, { useCallback, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { RefContext } from 'App';
import { useDropdownOptions } from 'hooks/useDropdownOptions';
import { useQuery } from 'hooks/useQuery';
import { ReactComponent as Letter } from 'icons/letter.svg';

import { Button } from 'components/Button';
import { Dropdown } from 'components/Dropdown';
import { DropdownDirection } from 'components/Dropdown/Dropdown.types';

import { HeaderNavItem } from './components';
import { IHeaderNavProps } from './HeaderNav.types';

import './HeaderNav.scss';

const CnHeaderNav = cn('headerNav');

export const HeaderNav: React.FC<IHeaderNavProps> = ({ items = [] }) => {
    const navigate = useNavigate();
    const query = useQuery();
    const { pathname } = useLocation();
    const { aboutRef, remoteRef } = useContext(RefContext);

    const dropdownOptions = useDropdownOptions(promoApps);

    const handleContactButtonClick = useCallback(() => {
        navigate(AppRoute.Contact());
    }, [navigate]);

    const handleNavItemClick = useCallback(
        (anchor: Anchor | null) => {
            if (anchor) {
                query.set(QueryParam.Anchor, anchor);
            }

            if (pathname === AppRoute.Home() && anchor === Anchor.About) {
                aboutRef?.current?.scrollIntoView({ block: 'center' });
            }

            if (pathname === AppRoute.Home() && anchor === Anchor.Remote) {
                remoteRef?.current?.scrollIntoView({ block: 'center' });
            }

            if (pathname !== AppRoute.Home()) {
                navigate({
                    pathname: AppRoute.Home(),
                    search: query.toString(),
                });
            }
        },
        [navigate, query, pathname, aboutRef, remoteRef],
    );

    return (
        <nav className={CnHeaderNav()}>
            <Dropdown options={dropdownOptions} direction={DropdownDirection.Down} />
            <ul className={CnHeaderNav('list')}>
                {items.length > 0 &&
                    items.map((item) => (
                        <HeaderNavItem key={item.id} item={item} handleClick={handleNavItemClick} />
                    ))}
            </ul>
            <Button onClick={handleContactButtonClick} customClass={CnHeaderNav('button')}>
                <Letter />
                Contact us
            </Button>
        </nav>
    );
};
