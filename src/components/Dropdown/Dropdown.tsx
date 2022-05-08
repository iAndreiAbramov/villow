import { AppRoute } from 'constants/AppRoute';
import { QueryParam } from 'constants/QueryParam';

import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { useActiveOption } from 'hooks/useActiveOption';
import { useCloseByEsc } from 'hooks/useCloseByEsc';
import { useCloseByOuterClick } from 'hooks/useCloseByOuterClick';
import { useQuery } from 'hooks/useQuery';
import { ReactComponent as Angle } from 'icons/angle.svg';

import { DropdownItem } from './components';
import { DropdownDirection, IDropdownProps } from './Dropdown.types';

import './Dropdown.scss';

const CnDropdown = cn('dropdown');

export const Dropdown: React.FC<IDropdownProps> = ({ options = [], direction = DropdownDirection.Down }) => {
    const query = useQuery();
    const navigate = useNavigate();
    const [areOptionsShown, setAreOptionsShown] = useState<boolean>(false);

    const selectRef = useRef(null);

    const activeOption = useActiveOption(options);

    const handleSelectClick = useCallback(() => {
        setAreOptionsShown((current) => !current);
    }, []);

    const handleOptionClick = useCallback(
        (id: string) => {
            query.set(QueryParam.Tab, id);
            navigate({
                pathname: AppRoute.Home(),
                search: query.toString(),
            });
            setAreOptionsShown(false);
        },
        [query, navigate],
    );

    const handleDropdownClose = useCallback(() => {
        setAreOptionsShown(false);
    }, []);

    useCloseByEsc(handleDropdownClose);
    useCloseByOuterClick(selectRef, handleDropdownClose);

    return (
        <div className={CnDropdown()}>
            <div ref={selectRef} className={CnDropdown('select')} onClick={handleSelectClick}>
                <span className={CnDropdown('selectText')} title={activeOption.appName}>
                    {activeOption.appName}
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
