import React from 'react';

import { IHeaderNavItemProps } from './HeaderNavItem.types';

import './HeaderNavItem.scss';

export const HeaderNavItem: React.FC<IHeaderNavItemProps> = ({ item, handleClick }) => {
    return (
        <li className="nav-item" onClick={() => handleClick(item.anchor)}>
            {item.name}
        </li>
    );
};
