import { useMemo } from 'react';
import { IDropdownOption } from 'types/dropdown.types';
import { IPromoApp } from 'types/promo-tabs.types';

export const useDropdownOptions = (promoApps: IPromoApp[]): IDropdownOption[] =>
    useMemo(() => promoApps.map(({ appName, id }) => ({ appName, id })), [promoApps]);
