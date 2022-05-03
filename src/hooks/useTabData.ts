import { IPromoTab } from 'types/promo-tabs.types';

const TAB_DATA_STUB = {
    id: 0,
    title: '',
    subtitle: '',
    description: '',
    bgImage: '',
    icon: '',
};

export const useTabData = ({
    tabData,
    activeTabId,
}: {
    tabData: IPromoTab[];
    activeTabId: string | null;
}): IPromoTab => {
    return tabData.find((item) => String(item.id) === activeTabId) || TAB_DATA_STUB;
};
