import { AppRoute } from 'constants/AppRoute';
import { HeaderDropdownOptions } from 'constants/dropdown-options';

import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@bem-react/classname';
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

    const handleContactButtonClick = useCallback(() => {
        navigate(AppRoute.Contact());
    }, [navigate]);

    return (
        <nav className={CnHeaderNav()}>
            <Dropdown options={HeaderDropdownOptions} defaultName="Apps" direction={DropdownDirection.Down} />
            <ul className={CnHeaderNav('list')}>
                {items.length > 0 && items.map((item) => <HeaderNavItem key={item.id} item={item} />)}
            </ul>
            <Button onClick={handleContactButtonClick} customClass={CnHeaderNav('button')}>
                <Letter />
                Contact us
            </Button>
        </nav>
    );
};
