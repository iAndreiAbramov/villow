import React from 'react';

import { IHeaderNavItemProps } from './HeaderNavItem.types';

import './HeaderNavItem.scss';

export const HeaderNavItem: React.FC<IHeaderNavItemProps> = ({ item }) => {
    const { name, href } = item;
    return (
        <li className="nav-item">
            <a href={href}>{name}</a>
        </li>
    );
};
