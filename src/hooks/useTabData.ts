import { Platform } from 'types/promo-slider.types';
import { IPromoApp } from 'types/promo-tabs.types';

const TAB_DATA_STUB: IPromoApp = {
    id: 0,
    platform: Platform.Mac,
    appName: '',
    title: '',
    subtitle: '',
    description: '',
    bgImage: '',
    icon: '',
    storeIcon: '',
    bigSlides: [],
    smallSlides: [],
};

export const useTabData = ({
    tabData,
    activeTabId,
}: {
    tabData: IPromoApp[];
    activeTabId: string | null;
}): IPromoApp => {
    return tabData.find((item) => String(item.id) === activeTabId) || TAB_DATA_STUB;
};
