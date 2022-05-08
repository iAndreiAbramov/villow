import { IDropdownOption } from 'types/dropdown.types';

export const useListItems = (countries: string[]): IDropdownOption[] => {
    return countries.map((item, index) => ({ appName: item, id: index }));
};
