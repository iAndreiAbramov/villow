import React from 'react';
import { cn } from '@bem-react/classname';

import { IDropdownOptionProps } from './DropdownItem.types';

import './DropdownItem.scss';

const CnDropdownItem = cn('dropdownItem');

export const DropdownItem: React.FC<IDropdownOptionProps> = ({ option, handleClick }) => {
    const { appName, id } = option;
    return (
        <li className={CnDropdownItem()} onClick={() => handleClick(String(id))}>
            {appName}
        </li>
    );
};
