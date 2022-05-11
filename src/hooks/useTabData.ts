import { QueryParam } from 'constants/QueryParam';

import { Platform } from 'types/promo-slider.types';
import { IPromoApp } from 'types/promo-tabs.types';

import { useQuery } from './useQuery';

const TAB_DATA_STUB: IPromoApp = {
    id: 0,
    platform: Platform.Mac,
    appName: '',
    title: '',
    subtitle: '',
    description: '',
    bgImage: '',
    icon: '',
    storeLink: '',
    bigSlides: [],
    smallSlides: [],
};

export const useTabData = (tabData: IPromoApp[]): IPromoApp => {
    const query = useQuery();
    const activeTabId = query.get(QueryParam.Tab);
    return tabData.find((item) => String(item.id) === activeTabId) || TAB_DATA_STUB;
};
