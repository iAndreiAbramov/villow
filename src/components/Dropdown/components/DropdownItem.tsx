import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { IDropdownOptionProps } from './DropdownItem.types';

const CnDropdownItem = cn('dropdownItem');

import './DropdownItem.scss';

export const DropdownItem: React.FC<IDropdownOptionProps> = ({ option, handleClick }) => {
    const { name, href } = option;
    return (
        <li className={CnDropdownItem()} onClick={() => handleClick(name)}>
            <Link to={href}>{name}</Link>
        </li>
    );
};
