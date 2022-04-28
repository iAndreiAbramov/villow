import { IDropdownOption } from 'types/dropdown.types';

export interface IDropdownOptionProps {
    option: IDropdownOption;
    handleClick: (name: string) => void;
}
