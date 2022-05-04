import { IDropdownOption } from 'types/dropdown.types';

export const useListItems = (countries: string[]): IDropdownOption[] => {
    return countries.map((item, index) => ({ name: item, href: '#', id: index }));
};
