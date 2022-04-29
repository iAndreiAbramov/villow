import React from 'react';
import { Link } from 'react-router-dom';

import { IHeaderNavItemProps } from './HeaderNavItem.types';

import './HeaderNavItem.scss';

export const HeaderNavItem: React.FC<IHeaderNavItemProps> = ({ item }) => {
    const { name, href } = item;
    return (
        <li className="nav-item">
            <Link to={href}>{name}</Link>
        </li>
    );
};
