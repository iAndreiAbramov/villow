import React, { useCallback, useRef, useState } from 'react';
import { cn } from '@bem-react/classname';
import { useCloseByEsc } from 'hooks/useCloseByEsc';
import { useCloseByOuterClick } from 'hooks/useCloseByOuterClick';
import { ReactComponent as Angle } from 'icons/angle.svg';

import { DropdownItem } from './components';
import { DropdownDirection, IDropdownProps } from './Dropdown.types';

import './Dropdown.scss';

const FALLBACK_OPTION = {
    name: '',
    href: '#',
    id: 0,
};

const CnDropdown = cn('dropdown');

export const Dropdown: React.FC<IDropdownProps> = ({
    options = [FALLBACK_OPTION],
    defaultName = '',
    direction = DropdownDirection.Down,
}) => {
    const [firstOption] = options;
    const [activeName, setActiveName] = useState<string>(defaultName || firstOption.name);
    const [areOptionsShown, setAreOptionsShown] = useState<boolean>(false);

    const selectRef = useRef(null);

    const handleSelectClick = useCallback(() => {
        setAreOptionsShown((current) => !current);
    }, []);

    const handleOptionClick = useCallback((name: string) => {
        setActiveName(name);
        setAreOptionsShown(false);
    }, []);

    const handleDropdownClose = useCallback(() => {
        setAreOptionsShown(false);
    }, []);

    useCloseByEsc(handleDropdownClose);
    useCloseByOuterClick(selectRef, handleDropdownClose);

    return (
        <div className={CnDropdown()}>
            <div ref={selectRef} className={CnDropdown('select')} onClick={handleSelectClick}>
                <span className={CnDropdown('selectText')} title={activeName}>
                    {activeName}
                </span>
                <Angle className={CnDropdown('selectAngle', { reversed: areOptionsShown })} />
            </div>
            {areOptionsShown && (
                <ul className={CnDropdown('options', { direction: direction })}>
                    {options.map((option) => (
                        <DropdownItem key={option.id} option={option} handleClick={handleOptionClick} />
                    ))}
                </ul>
            )}
        </div>
    );
};
