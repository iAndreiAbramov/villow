import { IDropdownOption } from 'types/dropdown.types';

export enum DropdownDirection {
    Up = 'up',
    Down = 'down',
}

export interface IDropdownProps {
    options: IDropdownOption[];
    direction: DropdownDirection;
    onChange?: () => void;
    defaultName?: string;
}
