import { QueryParam } from 'constants/QueryParam';

import { IDropdownOption } from 'types/dropdown.types';

import { useQuery } from './useQuery';

const FALLBACK_OPTION: IDropdownOption = {
    appName: '',
    id: 0,
};

export const useActiveOption = (options: IDropdownOption[]): IDropdownOption => {
    const query = useQuery();
    const activeTabId = query.get(QueryParam.Tab) || '1';
    return options.find((option) => String(option.id) === activeTabId) || FALLBACK_OPTION;
};
